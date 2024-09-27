import {todos} from './componants.js'
import {default as fecthTodo} from './fetch.js'
let i = 1 

try {
    let defaultTodo = await fecthTodo("https://jsonplaceholder.typicode.com/todos?_limit=5")
    for (let {title, completed} of defaultTodo){
        let defaultTodoItem = new todos(i++)
        defaultTodoItem.label.innerText = title
        defaultTodoItem.checkbox.checked = completed
        document.querySelector('.list-group').append(defaultTodoItem.todo)
        
    }
    
} catch(e){
    console.log("Erreur au niveau du lien https", e)
}
let n = 1;
let arr = []

document.querySelector('form .btn').addEventListener('click', (e)=>{
    e.preventDefault()
    let val = document.querySelector('.form-control').value
    
    if (val){
        let newTodo = new todos(i++, val)
        document.querySelector('.list-group').append(newTodo.todo)
    }    

})
//Doesnt Pass as Well
document.querySelectorAll('#delete').forEach(del=>{
    del.addEventListener('click', (e)=>{
    e.currentTarget.parentElement.remove()}
)})

document.querySelector('.btn-outline-primary:nth-of-type(3)').addEventListener('click', ()=>{
    let arr = Array.from(document.querySelectorAll('.list-group-item')).filter((el)=>{
    return el.querySelector('.form-check-input').checked === true})
        console.log(arr);
        document.querySelector('.list-group').innerHTML = "" /* Bad logiq */
        arr.forEach(item=>{
            console.log(item);
            
            document.querySelector('.list-group').prepend(item)
        })
    })

