import { nanoid } from 'nanoid';
import { form, home } from './index';
import {
  upcomingProjects, projectQueue, transparentLayer, createList, viewProject,
} from './dom';
import { createProject, projects } from './create-project';

let checkListItems = [];

function clearForm() {
  title.value = '';
  description.value = '';
  date.value = '';
  radios.value = '';
  checkListItems = [];
}

function checkList(e) {
  e = e.target;

  const newItem = document.getElementById('new-todo');
  const addNewItem = document.getElementById('add-todo');

  if (e === addNewItem) {
    if (newItem.value === '') {
      alert('Please enter a task');
    } else {
      const id = nanoid();
      const item = newItem.value;
      checkListItems.push({ item, id, complete: 'incomplete' });
      newItem.value = '';
    }
  }

  createList();
}

function submitNewProject(e) {
  e = e.target;
  const submit = document.getElementById('new-project-submit');
  const radios = document.querySelector('input[name="priority"]:checked');
  const date = document.getElementById('due-date');
  if (e === submit) {
    if (title.value === '' || description.value === '' || date.value === '' || radios.value === '') {
      alert('Please make sure all fields are properly filled in');
    } else {
      createProject(title.value, description.value, nanoid(), checkListItems, radios.value, date.value);
      upcomingProjects();
      projectQueue();
      form.style.visibility = 'hidden';
      transparentLayer.style.visibility = 'hidden';
      checkListItems = [];
      location.reload();
      clearForm();
    }
  }
}

function addNew(e) {
  e = e.target;
  const add = document.querySelector('.add-new');
  if (e === add) {
    transparentLayer.style.visibility = 'visible';
    form.style.visibility = 'visible';
  }
}

function addTodos(e) {
  e = e.target.parentElement.getAttribute('id');

  projects.forEach((item) => {
    if (item.id === e) {
      viewProject(item);
    }
  });
}

function remove(e) {
  const item = e.target.parentElement.getAttribute('id');
  e = e.target.innerHTML;
  if (e === 'Delete') {
    projects.forEach((project, index) => {
      if (project.id === item) {
        projects.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(projects));
        location.reload();
      }
    });
  }
}

function removeChecklistItem(e) {
  const task = e.target.getAttribute('id');
  e = e.target.innerHTML;
  if (e === 'x') {
    projects.forEach((item) => {
      item.list.forEach((node, index) => {
        if (task === node.id) {
          item.list.splice(index, 1);
          localStorage.setItem('projects', JSON.stringify(projects));
          viewProject(item);
        }
      });
    });
  }
}

function addToChecklist(e) {
  const add = document.querySelector('.add-task');
  const id = e.target.getAttribute('id');
  const task = document.querySelector('.new-task-input');
  if (e.target === add) {
    projects.forEach((project) => {
      if (project.id === id) {
        const item = task.value;
        const newId = nanoid();
        project.list.push({ item, newId });
        localStorage.setItem('projects', JSON.stringify(projects));
        viewProject(project);
      }
    });
  }
}

function completeChecklist(e) {
  const checkbox = document.querySelectorAll('.checkbox');
  projects.forEach((item) => {
    item.list.forEach((node) => {
      checkbox.forEach((el) => {
        if (el.id === node.id && el.checked) {
          node.complete = 'complete';
          localStorage.setItem('projects', JSON.stringify(projects));
        } else if (el.id === node.id && el.checked === false) {
          node.complete = 'incomplete';
          localStorage.setItem('projects', JSON.stringify(projects));
        }
      });
    });
  });
}

function goHome(e) {
  const homeBtn = document.getElementById('home');
  if (e.target === homeBtn) {
    home();
  }
}

function closeForm(e) {
  const close = document.querySelector('.close-form');
  if (e.target === close) {
    form.style.visibility = 'hidden';
    transparentLayer.style.visibility = 'hidden';
    clearForm();
  }
}

export {
  submitNewProject, addNew, addTodos, checkList, checkListItems, remove, removeChecklistItem, addToChecklist, goHome, completeChecklist, closeForm,
};
