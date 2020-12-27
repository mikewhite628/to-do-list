import {content, createHtmlElement, form, home} from './index.js'
import {upcomingProjects, projectQueue, addTasksForm, createList} from './dom.js'
import {createProject, projects} from './create-project.js'
import { nanoid } from 'nanoid'

let checkListItems = []

function checkList(e){
    e = e.target
    e.preventDefault
    
    const newItem = document.getElementById('new-todo')
    const addNewItem = document.getElementById('add-todo')

    if(e === addNewItem){
        let id = nanoid()
        let item = newItem.value
        checkListItems.push({item, id}) 
        newItem.value = ''
        console.log(checkListItems)     
    }
    
    createList()
}

function submitNewProject(e){
    e = e.target
    e.preventDefault
    const submit = document.getElementById('new-project-submit')
    if(e === submit){
    createProject(title.value, description.value, nanoid(), checkListItems)
    upcomingProjects()
    projectQueue()
    form.style.visibility = 'hidden'
    checkListItems = [];
    }
};

function addNew(e){
    e = e.target
    e.preventDefault
    const add = document.querySelector('.add-new')
    if(e === add)
    form.style.visibility = 'visible'
};


function addTodos(e){
    e = e.target.parentElement.getAttribute('id')
    
    projects.forEach((item) => {
        if (item.id === e) {
            const main = document.querySelector('.main');
            main.innerHTML = ''
            const div = createHtmlElement('div', item.id, ['new-todo'], null)
            const header = createHtmlElement('h2', null, null, item.title)
            const description = createHtmlElement('div', null, null, item.description)
            const ul = createHtmlElement('ul', null, null, 'Pending Tasks')
            const newTaskField = createHtmlElement('input', item.id, ['new-task-input'], null)
            const newTask = createHtmlElement('button', item.id, ['add-task'], '+')
            item.list.forEach((node) =>{
                const remove = createHtmlElement('button', node.id, null, 'x')
                const li = createHtmlElement('li',null,['checklist-item'], null)
                li.appendChild(document.createTextNode(node.item))
                ul.appendChild(li)
                li.appendChild(remove)
            })

            main.appendChild(div);
            div.appendChild(header);
            header.appendChild(newTaskField)
            header.appendChild(newTask)
            div.appendChild(description);
            div.appendChild(ul);
        }
    })
}

function remove(e) {
    let item = e.target.parentElement.getAttribute('id')
    e = e.target.innerHTML
   if(e === 'Delete'){
       projects.forEach((project, index) => {
           if (project.id === item){
               projects.splice(index, 1)
               localStorage.setItem('projects', JSON.stringify(projects))
                location.reload()
           }
       })
   }
}


function removeChecklistItem(e){
    let item = e.target.getAttribute('id')
    e = e.target.innerHTML
    if (e === 'x'){
        projects.forEach((project) => {
            project.list.forEach((node, index) => {
                if (item === node.id) {
                    project.list.splice(index, 1)
                    localStorage.setItem('projects', JSON.stringify(projects))
                }
            })

        })
    }
}

function addToChecklist(e){
    const add = document.querySelector('.add-task')
    const id = e.target.getAttribute('id')
    const task = document.querySelector('.new-task-input')
    if(e.target === add){
        projects.forEach((project) =>{
            if(project.id === id){
                let item = task.value;
                let id = nanoid()
                project.list.push({item, id})
                localStorage.setItem('projects', JSON.stringify(projects))
                console.log(projects)
            }
        })
    }
}
console.log(projects)


export {submitNewProject, addNew, addTodos, checkList, checkListItems,remove, removeChecklistItem, addToChecklist}

