const userContainer = document.getElementById('container');
const getUsers = async (userId) => {
  const response = await fetch(`https://dummyjson.com/todos?limit=12&userId=${userId}`);
  const data = await response.json();
  return data.todos;
};
const displayUsers = async (userId) => {
  const users = await getUsers(userId);
  console.log(users);
  if (Array.isArray(users)) {
    users.forEach(item => {
      let div = document.createElement('div');
      let userName = document.createElement('input');
      let ids = document.createElement('span');
      let checkbox = document.createElement('input');
      let icon = document.createElement('i');
      checkbox.type = 'checkbox';
      checkbox.checked = item.completed;
      icon.classList.add('fa', 'fa-trash');
      ids.appendChild(icon);
      userName.value = item.todo;
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          userName.style.textDecoration = 'line-through';
        } else {
          userName.style.textDecoration = 'none';
        }
      });
      icon.addEventListener('click', () => {
        deleteUser(item.id);
        div.remove();
      });
      div.appendChild(checkbox);
      div.appendChild(userName);
      div.appendChild(ids);
      div.setAttribute('key', item.id);
      div.setAttribute('class', 'people');
      userContainer.appendChild(div);
    });
  }
};
const deleteUser = async (userId) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${userId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  } catch (error) {
    console.log(error);
  }
};
// Example usage:
const userId = 1; // Replace with the desired user ID
displayUsers(userId);
const addForm = document.getElementById('addForm');
addForm.addEventListener('submit', event => {
  event.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value;
  taskInput.value = '';
  if (newTask) {
    const div = document.createElement('div');
    const userName = document.createElement('input');
    const ids = document.createElement('span');
    const checkbox = document.createElement('input');
    const icon = document.createElement('i');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    icon.classList.add('fa', 'fa-trash');
    ids.appendChild(icon);
    userName.value = newTask;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        userName.style.textDecoration = 'line-through';
      } else {
        userName.style.textDecoration = 'none';
      }
    });
    icon.addEventListener('click', () => {
      div.remove();
    });
    div.appendChild(checkbox);
    div.appendChild(userName);
    div.appendChild(ids);
    div.setAttribute('key', Date.now());
    div.setAttribute('class', 'people');
    userContainer.prepend(div);
  }
});







  