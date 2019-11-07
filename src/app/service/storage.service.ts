import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // 保存数据
  setItem(key,value)
  {
      localStorage.setItem(key,value);
  }
  // 删除数据
  removeItem(key)
  {
      localStorage.removeItem(key);
  }
  // 获取数据
  getItem(key)
  {
      localStorage.getItem(key);
  }

  //清空
  clear() {
    localStorage.clear();
  }

}
