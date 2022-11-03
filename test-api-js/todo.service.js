class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D2",
            "done": false
        },{
            "title": "T3",
            "description": "D3",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todos.todo.push(todo);
             
    }

    delete_todo(id){
        // delete a todo
    }

    update_todo(id, todo){
        // update a todo
    }
}


module.exports= todoservice;
