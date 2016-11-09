'use strict';
// Lists Controller

function ListsController() {


  this.init = function(){
  let title  = $("[name='list_title']").val()
  debugger
    new List(title);
  $("[name='list_title']").val('')
  $('.container ul').empty();
  Store.data.lists.forEach((list) => {
    debugger
    $('.container ul').append(`<li>name: ${list.title} </li>`)
  });
}
}
//
// class ListController() {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
//
//
// (function(){
//   let title = $("[name='list_title']").val()
// return class {
//
//
//   init(){new List(title)
//   $("[name='list_title']").val('')
//   $('.container ul').empty()
//
//   Store.lists.forEach((list) => {
//     $('.container ul').append(`<li>name: ${list.title} </li>`)
//   })
// }
// }()})
