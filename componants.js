import {ComposeElement as create} from './tools.js'
//Comment
export class TodoLists {
    constructor(){
        this.TodoApp = create(
            'div',
            {
                'id': 'todolist',
                'class': 'container pt-5',
            },
        )
        this.TodoApp.innerHTML = `        
        <form class="d-flex pb-4">
            <input class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
            <button type="submit" id="BtnSub" class="btn btn-primary ms-3">Ajouter</button>
        </form>
        
        <main>
            <div class="btn-group mb-4" role="group">
                <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
                <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
                <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
            </div>
            <ul class="list-group"></ul>
        </main>
    `
}
}

/*
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
*/ 

export class todoItem {
    constructor(todoData){
        this.todoData = todoData
        //Creation de la TodoList
        this.todo = create(
            'li',
            {
                'class' : 'todo list-group-item d-flex align-items-center'
            }
        )
        //Creation de la checkbox
        this.checkbox = create(
            'input',
            {
                'type': 'checkbox',
                'id': this.todoData.id,
                'class': 'form-check-input',
            },
        )
        this.todoData.completed? this.checkbox.checked = true  : ""

        //Creation du label
        this.label = create(
            'label',
            {
                'class': 'ms-2 form-check-label',
                'for': this.todoData.id
            },
            this.todoData.title
        )

        //Creation de la zone de suppression
        this.delete = create(
            'button',
            {
                'class': 'ms-auto btn btn-danger btn-sm',
                'id': 'delete'
            }
        )
        this.icon = create(
            'i',
            {'class': 'bi-trash'},
        )
        this.delete.append(this.icon)
        this.delete.addEventListener('click',(e)=>{
            e.preventDefault()
            this.todo.remove()
        })

        

        //Append Todo
        this.todo.append(this.checkbox, this.label, this.delete)
    }



}

