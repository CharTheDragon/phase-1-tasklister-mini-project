document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    handleTask(event.target.new_task_description.value)
  })
});

function handleTask(task){
  let p = document.createElement('p')
  p.textContent = task
  document.querySelector('#tasks').appendChild(p)
}