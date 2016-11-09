'use strict';
// List Model
var List = (function(){

let id = 0

return class {
  constructor(title){
    this.id = ++id
    // this.data = data
    // this.value = value
    this.title = title
    this.all = []
    Store.lists = [...Store.lists, this];
  }}
}())
