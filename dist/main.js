(()=>{"use strict";var e={832:(e,t,n)=>{n.d(t,{kQ:()=>r,Ux:()=>u,cr:()=>a});const i=JSON.parse(localStorage.getItem("projects")||"[]");let l=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let i=63&n[e];t+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i<63?"_":"-"}return t},d=[];function o(){const e=document.querySelector(".left-sidebar");e.innerHTML="",i.forEach((t=>{const n=u("div",t.id,["project-display"],null),i=u("div",t.id,["todo-sidebar","display-title"],t.title);e.appendChild(n),n.appendChild(i)}))}function c(){const e=document.querySelector(".main"),t=document.querySelector(".main-header"),n=document.querySelector(".add-new");e.innerHTML="",e.appendChild(t),e.appendChild(n),i.forEach((t=>{const n=u("div",t.id,["projects-pending","project-display"],null),i=u("div",t.id,["display-title"],t.title),l=u("button",t.id,["delete-task"],"Delete");e.appendChild(n),n.appendChild(i),i.appendChild(l)}))}console.log(i);const r=document.getElementById("main-section"),a=document.getElementById("new-project-form");function u(e,t,n,i){const l=document.createElement(e);return t&&(l.id=t),n&&n.forEach((e=>l.classList.add(e))),i&&(l.innerText=i),l}!function(){const e=u("h1",null,null,"Get Er Done"),t=u("div",null,["left-sidebar"],null),n=u("h3",null,null,"Projects"),i=u("main",null,["main"],null),l=u("h2",null,["main-header"],"Projects"),d=u("button",null,["add-new"],"+");r.appendChild(e),r.appendChild(t),t.appendChild(n),r.appendChild(i),i.appendChild(l),i.appendChild(d)}(),o(),c(),document.addEventListener("click",(function(e){let t=e.target.getAttribute("id");"x"===(e=e.target.innerHTML)&&i.forEach((e=>{e.list.forEach(((n,l)=>{t===n.id&&(e.list.splice(l,1),localStorage.setItem("projects",JSON.stringify(i)))}))}))})),document.addEventListener("click",(function(e){let t=e.target.parentElement.getAttribute("id");"Delete"===(e=e.target.innerHTML)&&i.forEach(((e,n)=>{e.id===t&&(i.splice(n,1),localStorage.setItem("projects",JSON.stringify(i)),location.reload())}))})),document.addEventListener("click",(function(e){(e=e.target).preventDefault,e===document.getElementById("new-project-submit")&&(function(e,t,n,l){const d={title:e,description:t,id:n,list:l};i.push(d),localStorage.setItem("projects",JSON.stringify(i))}(title.value,description.value,l(),d),o(),c(),a.style.visibility="hidden",d=[])})),document.addEventListener("click",(function(e){(e=e.target).preventDefault,e===document.querySelector(".add-new")&&(a.style.visibility="visible")})),document.addEventListener("click",(function(e){e=e.target.parentElement.getAttribute("id"),i.forEach((t=>{if(t.id===e){const e=document.querySelector(".main");e.innerHTML="";const n=u("div",t.id,["new-todo"],null),i=u("h2",null,null,t.title),l=u("div",null,null,t.description),d=u("ul",null,null,"Pending Tasks"),o=u("input",t.id,["new-task-input"],null),c=u("button",t.id,["add-task"],"+");t.list.forEach((e=>{const t=u("button",e.id,null,"x"),n=u("li",null,["checklist-item"],null);n.appendChild(document.createTextNode(e.item)),d.appendChild(n),n.appendChild(t)})),e.appendChild(n),n.appendChild(i),i.appendChild(o),i.appendChild(c),n.appendChild(l),n.appendChild(d)}}))})),document.addEventListener("click",(function(e){(e=e.target).preventDefault;const t=document.getElementById("new-todo");if(e===document.getElementById("add-todo")){let e=l(),n=t.value;d.push({item:n,id:e}),t.value="",console.log(d)}!function(){const e=document.getElementById("new-project-checklist");e.innerHTML="",d.forEach((t=>{const n=u("li",null,["checklist-create"],null);n.appendChild(document.createTextNode(t.item)),e.appendChild(n)}))}()})),document.addEventListener("click",(function(e){const t=document.querySelector(".add-task"),n=e.target.getAttribute("id"),d=document.querySelector(".new-task-input");e.target===t&&i.forEach((e=>{if(e.id===n){let t=d.value,n=l();e.list.push({item:t,id:n}),localStorage.setItem("projects",JSON.stringify(i)),console.log(i)}}))}))}},t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={exports:{}};return e[i](l,l.exports,n),l.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(832)})();