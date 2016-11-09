'use strict';
// Tasks Controller

function TasksController() {


  this.init = function(){
    let description  = $("[name='task_description']").val();
    let priority =  $("[name='task_priority']").val();
    new Task(description, priority);
  $("[name='task_description']").val('');
  $("[name='task_priority']").val('');
  $('.container ul').empty();
  // Store.data.tasks.forEach((task) => {
  //   $('.container ul').append(`<li>name: ${task.title} </li>`)
  // })
};
}

// function TasksController() {
//   this.description = $("[name='task_description']").val()
//   this.priority = $("[name='task_priority']").val()
//   this.init = function(){
//     new Task(){
//   this.description;
//   this.priority;
//   $('.container ul').empty()}
//
//   // // Store.tasks.forEach((task) => {
//   // //   $('.container ul').append(`<li>name: ${task.priority} </li>`)
//   // });
//
//
// }
// }
