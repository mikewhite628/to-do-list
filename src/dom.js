import {content, createHtmlElement} from './index.js'
import {createProject, projects} from './create-project.js'
import {checkListItems} from './listeners.js'
import { nanoid } from 'nanoid'


function render() {
    const header = createHtmlElement('h1', null, null, 'Get Er Done')
    const sidebar = createHtmlElement('div', null, ['left-sidebar'], null)
    const sidebarHeader = createHtmlElement('h3', null, null, 'Projects')
    const main = createHtmlElement('main', null, ['main'], null)
    const mainHeader = createHtmlElement('h2', null, ['main-header'], 'Projects')
    const addNew = createHtmlElement('button', null, ['add-new'], '+')

    content.appendChild(header)

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





export {upcomingProjects, render as renderDom, projectQueue, addTasksForm, createList}