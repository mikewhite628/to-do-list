const projects = JSON.parse(localStorage.getItem('projects') || '[]').sort((a, b) => ((a.priority > b.priority) ? -1 : (a.priority === b.priority) ? ((a.date > b.date) ? 1 : -1) : 1));
function createProject(title, description, id, list, priority, date) {
  const project = {
    title,
    description,
    id,
    list,
    priority,
    date,
  };
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
  return { projects };
}

export { createProject, projects };
