export default async function fetchData(url){
    let data = await fetch(url)
    
    if (!data.ok){
        const err = document.createElement('div')
        err.classList.add('alert alert-danger')
        err.setAttribute('role', 'alert')
        err.innerText = `Failed to load server: ${data.status}`
        document.querySelector('main').prepend(err)
        return
    }
    return data.json()
    
}