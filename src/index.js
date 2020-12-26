import {createProject} from './create-project.js'
import {upcomingProjects, renderDom, projectQueue, addTasks} from './dom.js'
import {submitNewProject, addNew, addTodos, checkList, remove} from './listeners.js'

const content = document.getElementById('main-section');
const form = document.getElementById('new-project-form')



function createHtmlElement(type, id, arrayClasses, content){
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

    if (content) element.innerText = content;

    return element;
}


function home(){
    renderDom()
    upcomingProjects()
    projectQueue()
}

home();


document.addEventListener('click', remove)
document.addEventListener('click', submitNewProject);
document.addEventListener('click', addNew);
document.addEventListener('click', addTodos);
document.addEventListener('click', checkList);



export {content, createHtmlElement, form}




