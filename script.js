const button = document.querySelector('.button');
const showTasks = document.querySelector('.showTasks')
const inputText = document.getElementById('input')

button.addEventListener('click', () => {
    if (!(inputText.value === "")) {
        const task = document.createElement('div')
        task.className = 'task'
        showTasks.prepend(task)

        const taskContent = document.createElement('div')
        taskContent.className = 'taskContent'
        task.appendChild(taskContent)

        const checkBox = document.createElement('input')
        checkBox.type = "checkbox"
        taskContent.appendChild(checkBox)

        const p = document.createElement('p')
        p.innerHTML = inputText.value
        taskContent.appendChild(p)

        const deleteContent = document.createElement('div')
        deleteContent.className = 'deleteContent'
        task.appendChild(deleteContent)
        const img = document.createElement('img')
        img.src = "images/delete.png"
        img.alt = "delete"
        img.className = 'delete'
        deleteContent.appendChild(img)

        localStorage.setItem('taskItem', showTasks.innerHTML)

        inputText.value = ""
    } else {
        alert("Enter a task");
    }
})
showTasks.addEventListener('click', (event) => {

    if (event.target.className === 'delete') {
        let element = event.target.parentElement
        element.parentElement.remove();
        localStorage.setItem('taskItem', showTasks.innerHTML)
    }

})
showTasks.innerHTML = localStorage.getItem('taskItem')