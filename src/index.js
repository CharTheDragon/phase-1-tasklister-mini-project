document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.new_task_description.value)
  })
});
