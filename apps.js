import {TodoLists} from './componants.js'
import {default as fecthTodo} from './fetch.js'
import {addTodo} from './tools.js'


// Initialize TodoContainer
let Todo = new TodoLists()
document.querySelector('#todolist').append(Todo.TodoApp)


//Default Fetch Todo
try {
    let defaultTodo = await fecthTodo("https://jsonplaceholder.typicode.com/todos?_limit=5")
    for (let todo of defaultTodo){
        document.querySelector('.list-group').append(addTodo(todo))
    }
    
} catch(e){
    console.log("Erreur au niveau du lien https", e)
}

// 
function hash (){
    let checkbox = document.querySelectorAll("input[type='checkbox']")
    let id = checkbox.length + 1
    return id.toString()
}


document.querySelector('form')
.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = document.querySelector('.form-control')
    let todo = {
        "id": hash(),
        "title": input.value,
    }
    document.querySelector('.list-group').append(addTodo(todo))
    input.value = ''
})