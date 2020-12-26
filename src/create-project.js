const projects = JSON.parse(localStorage.getItem('projects') || '[]')
function createProject(title, description, id, list){
    const project = {
    title: title,
    description: description,
    id: id,
    list: list
    };
    projects.push(project)
    localStorage.setItem('projects', JSON.stringify(projects))
    return{projects}
}


export {createProject, projects}
