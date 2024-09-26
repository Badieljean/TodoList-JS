export class todos {
    constructor(i){
        //Creation de la TodoList
        this.todo = document.createElement('li')
        this.todo.setAttribute('class', 'list-group-item d-flex align-items-center')

        //Creation de la checkbox
        this.checkbox = document.createElement('input')
        this.checkbox.type = 'checkbox'
        this.checkbox.id = `todo-${i}`
        this.checkbox.classList.add('form-check-input')

        //Creation du label
        this.label = document.createElement('label')
        this.label.setAttribute('class', 'ms-2 form-check-label')
        this.label.setAttribute('for', `todo-${i}`)
        this.label.innerText = "Salut je suis le label"

        //Creation de la zone de suppression
        this.delete = document.createElement('label')
        this.delete.setAttribute('class', 'ms-auto btn btn-danger btn-sm')
        this.icon = document.createElement('i')
        this.icon.classList.add('bi-trash')
        this.delete.append(this.icon)

        this.delete.addEventListener('click', (e)=> e.currentTarget.parentNode.remove())

        //Append Todo
        this.todo.append(this.checkbox, this.label, this.delete)
    }

}