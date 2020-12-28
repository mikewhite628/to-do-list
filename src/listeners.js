import {form, home} from './index.js'
import {upcomingProjects, projectQueue, renderDom, createList, viewProject} from './dom.js'
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
    const radios = document.querySelector('input[name="priority"]:checked')
    const date = document.getElementById('due-date')

    if(e === submit){
    createProject(title.value, description.value, nanoid(), checkListItems, radios.value, date.value)
    upcomingProjects()
    projectQueue()
    form.style.visibility = 'hidden'
    checkListItems = [];
    location.reload()
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
            viewProject(item)
            
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
    let task = e.target.getAttribute('id')
    e = e.target.innerHTML
    if (e === 'x'){
        projects.forEach((item) => {
            item.list.forEach((node, index) => {
                if (task === node.id) {
                    item.list.splice(index, 1)
                    localStorage.setItem('projects', JSON.stringify(projects))
                    viewProject(item)
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
                viewProject(project)
                console.log(projects)
            }
        })
    }
}

function goHome(e){
const homeBtn = document.getElementById('home')
if (e.target === homeBtn) {
home()
    }
}


export {submitNewProject, addNew, addTodos, checkList, checkListItems,remove, removeChecklistItem, addToChecklist, goHome}

