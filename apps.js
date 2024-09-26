import {todos} from './componants.js'
let i = 1 
document.querySelector('form .btn').addEventListener('click', (e)=>{
    let newTodo = new todos(i)
    document.querySelector('.list-group').append(newTodo.todo)
    i++
})
