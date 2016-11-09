$(function(){
  $('#add_list').on('submit', function(event){
    event.preventDefault();
    const listController = new ListsController();
    listController.init();
  })



  $('#wrapper').on('submit', function(event){
    event.preventDefault();
    const tasksController = new TasksController();
    tasksController.init();
  })

  $('#wrapper').on('click','.destroy-list',function(event){
    event.preventDefault();
    let id = $(this).data('id');
    deleteList(id);
  })

  // $('#delete_tasks').on('click', function(event){
  //   event.preventDefault();
  //   deleteTask();
  // })


})
