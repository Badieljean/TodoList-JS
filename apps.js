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

// Creating Id
function hash (){
    let checkbox = document.querySelectorAll("input[type='checkbox']")
    let id = checkbox.length + 1
    return id.toString()
}

// New Data (todo) from input 
document.querySelector('form')
.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = document.querySelector('.form-control')
    let dataValid = input.value.trim()
    if (!dataValid){
        return
    }
    let todo = {
        "id": hash(),
        "title": input.value,
    }
    document.querySelector('.list-group').prepend(addTodo(todo))
    input.value = ''
})

//Toggle Btn
const allbtn = document.querySelectorAll('.btn-group button')
allbtn.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        for (let btn of allbtn){
            btn.classList.remove('active')
        }
        e.currentTarget.classList.add('active')
    })
})


document.querySelector('#all')
.addEventListener('click', ()=>{
    document.querySelectorAll('.todo').forEach(item=>{
        item.style.setProperty('display', 'flex', 'important')
    })
})

document.querySelector('#to-do')
.addEventListener('click', ()=>{
    document.querySelectorAll('.todo').forEach(item=>{
        item.style.setProperty('display', 'flex', 'important');
        if (!item.classList.contains('Completed')){
            item.style.setProperty('display', 'none', 'important');
        }
    })
})

document.querySelector('#done')
.addEventListener('click', ()=>{
    document.querySelectorAll('.todo').forEach(item=>{
        item.style.setProperty('display', 'flex', 'important');
        if (item.classList.contains('Completed')){
            item.style.setProperty('display', 'none', 'important');
        }
    })
});
