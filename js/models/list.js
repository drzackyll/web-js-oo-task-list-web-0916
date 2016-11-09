'use strict';
// List Model
const List = (function(){

let id = 0

return class {
  constructor(title){
    this.id = ++id
    // this.data = data
    // this.value = value
    this.title = title
    this.all = []
    Store.data.lists = [].concat(...Store.data.lists, this)

  }}
}())
