import {ComposeElement as create} from './tools.js'

export class todos {
    constructor(i, text){
        this.create = create
        //Creation de la TodoList
        this.todo = document.createElement('li')
        this.todo.setAttribute('class', 'list-group-item d-flex align-items-center')
        this.todo.setAttribute('id', `${i}`)

        //Creation de la checkbox
        this.text = text
        this.checkbox = this.create(
            'input',
            {
                'type': 'checkbox',
                'id': `todo-${i}`,
                'class': 'form-check-input',
            },
        )

        //Creation du label
        this.label = this.create(
            'label',
            {
                'class': 'ms-2 form-check-label',
                'for': `todo-${i}`,
            },
            this.text
        )

        //Creation de la zone de suppression
        this.delete = this.create(
            'label',
            {'class': 'ms-auto btn btn-danger btn-sm',
                'id': 'delete'
            }
        )
        this.icon = this.create(
            'i',
            {'class': 'bi-trash'},
        )

        this.delete.append(this.icon)

        //Append Todo
        this.todo.append(this.checkbox, this.label, this.delete)
    }

}