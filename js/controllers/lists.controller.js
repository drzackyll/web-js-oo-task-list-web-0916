'use strict';
// Lists Controller

function ListsController() {


  this.init = function(){
  let title  = $("[name='list_title']").val()
    new List(title);
  $("[name='list_title']").val('')
  $('.container ul').empty();
  Store.data.lists.forEach((list) => {
  $('.container div').append(`<div>${list.title} <button data-id='${list.id}' class="delete">X </button></div>`)
});

    let list1 = Store.data.lists[Store.data.lists.length - 1]
    $('.dropdown').append(`<option value=${list1.id}>${list1.title}</option>`)
//   }
// );
}
}

function deleteList(id){
  store.lists = store.lists.filter(function(list){
   return list.id !== id;
 })
  $("#lists").empty()
  $("#select_list").empty()

  store.lists.forEach((list) => {
      $('#lists').append(`<div class="list"><h2><button class="destroy-list" data-id="${list.id}">x</button> ${list.title}</h2><ul id="list-${list.id}" data-id="${list.id}"></ul></div>`)
      $('#select_list').append(`<option value= ${list.id}> ${list.title}  </option>`)
      store.tasks.forEach((task) => {
        if (parseInt(task.list_id) === list.id) {
          $(`#list-${task.list_id}`).append(`<li data-id="${task.id}"><button class="destroy-task" list-id = "${id}" data-id = "${task.id}">x</button> ${task.description}, ${task.priority}</li>`)
        }
        })

    })


}
