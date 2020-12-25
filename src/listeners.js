import {content, createHtmlElement, form, store, save, projects_deserialized} from './index.js'
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
        checkListItems.push(newItem.value) 
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
            const ul = createHtmlElement('ul', null, null, 'Pendinbg Tasks')
            item.list.forEach((node) =>{
                const li = createHtmlElement('li',null,null, null)
                li.appendChild(document.createTextNode(node))
                ul.appendChild(li)
            })
            main.appendChild(div);
            div.appendChild(header);
            div.appendChild(description);
            div.appendChild(ul);
        }


    })
}




export {submitNewProject, addNew, addTodos, checkList, checkListItems}

