import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';


// 树的数据结构
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

// 数据结构
export class FileFlatNode {
  constructor(
     public expandable: boolean, public filename: string, public level: number, public type: any) {}
}

const TREE_DATA = JSON.stringify({
  Documents: {
     angular: {
        src: {
           compiler: 'ts',
           core: 'ts'
        }
     },
     material2: {
        src: {
           button: 'ts',
           checkbox: 'ts',
           input: 'ts'
        }
     }
  }
});

@Injectable()
export class FileDatabase {
   dataChange = new BehaviorSubject<FileNode[]>([]);
   get data(): FileNode[] { return this.dataChange.value; }
   constructor() {
      this.initialize();
   }
   initialize() {
      const dataObject = JSON.parse(TREE_DATA);   
      const data = this.buildFileTree(dataObject, 0);
      this.dataChange.next(data);
   } 
   buildFileTree(obj: {[key: string]: any}, level: number): FileNode[] {
      return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
         const value = obj[key];
         const node = new FileNode();
         node.filename = key;
         if (value != null) {
            if (typeof value === 'object') {
               node.children = this.buildFileTree(value, level + 1);
            } else {
               node.type = value;
            }
         }
         return accumulator.concat(node);
      }, []);
   }
}





@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.less'],
  providers: [FileDatabase]
})
export class AddMenuComponent implements OnInit {

  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  // todo inUse的写法能优化不？感觉代码很冗余
  stateList: string[] = ['启用', '不启用'];
  inUse: string = this.stateList[0];
  currentMenu: string = "选择父级菜单";

  menuName: string;// 菜单名称
  menuUrl: string; // url
  menuSort: number;// 排序
  menuIcon: string;// 图标

  private _getLevel = (node: FileFlatNode) => node.level;
  private _isExpandable = (node: FileFlatNode) => node.expandable;
  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);
  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;

  transformer = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type);
 }

  constructor(
    database: FileDatabase,
    private dataService: DataService
    ) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
    this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    database.dataChange.subscribe(data => this.dataSource.data = data);
 }

  // todo 修改布局

  ngOnInit() {
  }

  addMenu() {
    let inUse = this.inUse == this.stateList[0];
    // todo
    let menu = {menuName: this.menuName, url: this.menuUrl, icon: this.menuIcon, sort: this.menuSort, inUser: inUse};
    this.dataService.addMenu(menu).subscribe(res => {
      // todo dialog
      if (res && res["code"] == 1) {
         alert("菜单添加成功！");
      }
    });
  }

}