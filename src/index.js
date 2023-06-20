document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    createTask(event.target.new_task_description.value)
    form.reset()
  })
});

function createTask(task){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = 'X'
  p.textContent = `${task}  `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
  btn.addEventListener('click', handleDelete)
}

function handleDelete(event){
  event.target.parentNode.remove()
}