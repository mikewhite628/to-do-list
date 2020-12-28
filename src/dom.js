import {content, createHtmlElement} from './index.js'
import {createProject, projects} from './create-project.js'
import {checkListItems} from './listeners.js'
import { nanoid } from 'nanoid'


function render() {
    const header = createHtmlElement('h1', null, null, 'Get Er Done')
    const nav = createHtmlElement('nav', 'home', null, 'Home')
    const sidebar = createHtmlElement('div', null, ['left-sidebar'], null)
    const sidebarHeader = createHtmlElement('h3', null, null, 'Projects')
    const main = createHtmlElement('main', null, ['main'], null)
    const mainHeader = createHtmlElement('h2', null, ['main-header'], 'Projects')
    const addNew = createHtmlElement('button', null, ['add-new'], '+')

    content.appendChild(header)
    content.appendChild(nav)

    content.appendChild(sidebar)
    sidebar.appendChild(sidebarHeader)

    content.appendChild(main)
    main.appendChild(mainHeader)
    main.appendChild(addNew)
    
}



function upcomingProjects() { 
    const pending = document.querySelector('.left-sidebar')
    pending.innerHTML = ''
    projects.forEach((item) => {
        const div = createHtmlElement('div', item.id, ['project-display'], null)
        const title = createHtmlElement('div', item.id, ['todo-sidebar', 'display-title'], item.title)
        pending.appendChild(div)
        div.appendChild(title)
        if(item.priority === 'urgent'){
            title.style.color = 'red'
        }
    }
)}

function projectQueue(){
    const main = document.querySelector('.main');
    const mainHeader = document.querySelector('.main-header')
    const addNew = document.querySelector('.add-new')
    main.innerHTML = ''

    main.appendChild(mainHeader)
    main.appendChild(addNew)
    projects.forEach((item) => {
        const div = createHtmlElement('div', item.id, ['projects-pending', 'project-display'], null);
        const title = createHtmlElement('div', item.id, ['display-title'], item.title);
        const deleteTask = createHtmlElement('button', item.id, ['delete-task'], 'Delete')
        main.appendChild(div);
        div.appendChild(title);
        title.appendChild(deleteTask)
        if(item.priority === 'urgent'){
            title.style.color = 'red'
        }
    })
    
}

function addTasksForm(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const div = createHtmlElement('div', null, ['new-todo'], null)
    const header = createHtmlElement('h2', null, null, 'Add Todos!')

    main.appendChild(div);
    div.appendChild(header);

}

function createList(){
    const ul = document.getElementById('new-project-checklist')
    ul.innerHTML = ''
    checkListItems.forEach((item) => {
        const li = createHtmlElement('li',null,['checklist-create'], null)
        li.appendChild(document.createTextNode(item.item))
        ul.appendChild(li)
    })

}

function viewProject(item){
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






export {upcomingProjects, render as renderDom, projectQueue, addTasksForm, createList, viewProject}