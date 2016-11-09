'use strict';
// Task Model

const Task = (function(){
  let id = 0

return class {
  constructor(description, priority, list){
    this.id = ++id;
    this.list_id = list;
    // this.data = data;
    // this.value = value;
    this.description = description;
    this.priority = priority;
    Store.data.tasks = [].concat(...Store.data.tasks, this);
  }
}
}())




//
//   el(){
//
//   }
//
//   build(){
//
//   }
// }
