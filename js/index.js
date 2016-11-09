$(function(){
  $('#add_list').on('submit', function(event){
    event.preventDefault();
    const listController = new ListsController();
    listController.init();
  })



  $('#add_task').on('submit', function(event){
    event.preventDefault();
    const tasksController = new TasksController();
    tasksController.init();
  })

})
