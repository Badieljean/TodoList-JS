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
                <button type="button" class=" btn btn-outline-primary active" id="all">Toutes</button>
                <button type="button" class=" btn btn-outline-primary" id="to-do">A faire</button>
                <button type="button" class=" btn btn-outline-primary" id="done">Faites</button>
            </div>
            <ul class="list-group"></ul>
        </main>
    `
}
}


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
        this.checkbox.addEventListener('change', (e)=> this.completed(e.currentTarget))

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
        this.completed(this.checkbox)
        this.todo.append(this.checkbox, this.label, this.delete)
    }

    completed(element){
        if (element.checked){
            this.todo.classList.add('Completed')
        } else {
            this.todo.classList.remove('Completed')
        }
        
    }

}

