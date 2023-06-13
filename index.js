
// Fetches the todos as per user id and display in the browser
function fetchTodos(userId) {
    // Simulated data for demonstration purposes
    const todos = {
      userId1: [
        { id: 'item1', task: 'Item 1', completed: false },
        { id: 'item2', task: 'Item 2', completed: true },
        { id: 'item3', task: 'Item 3', completed: false },
      ],
      userId2: [
        { id: 'item4', task: 'Item 4', completed: false },
        { id: 'item5', task: 'Item 5', completed: false },
        { id: 'item6', task: 'Item 6', completed: false },
      ],
    };
  
    const todoList = todos[userId];
    if (todoList) {
      const ul = document.getElementById(userId);
      ul.innerHTML = '';
      todoList.forEach((todo) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = todo.id;
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => completeTask(todo.id));
  
        const label = document.createElement('label');
        label.htmlFor = todo.id;
        label.textContent = todo.task;
  
        li.appendChild(checkbox);
        li.appendChild(label);
        ul.appendChild(li);
      });
    }
  }
  
  // Adds the ability to complete an unfinished task
  function completeTask(taskId) {
    // Simulated update for demonstration purposes
    const completed = document.getElementById(taskId).checked;
    console.log(`Task "${taskId}" completed: ${completed}`);
  }
  
  // Implements the ability to add a new task as per a specific user id
  function addTask(userId, task) {
    // Simulated update for demonstration purposes
    const ul = document.getElementById(userId);
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `newItem${ul.childElementCount + 1}`;
  
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = task;
  
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
  }
  
  // Implement the ability to delete a task
  function deleteTask(taskId) {
    // Simulated delete for demonstration purposes
    const li = document.getElementById(taskId).parentNode;
    li.parentNode.removeChild(li);
  }
  
  // Example usage:
  document.addEventListener('DOMContentLoaded', function () {
    // Fetch todos for user id 'userId1' and display them
    fetchTodos('userId1');
  
    // Complete a task when the checkbox is changed
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => completeTask(checkbox.id));
    });
  
    // Add a new task for user id 'userId1'
    const addButton = document.querySelector('.btn button');
    addButton.addEventListener('click', () => {
      const userInput = prompt('Enter a new task:');
      if (userInput) {
        addTask('userId1', userInput);
      }
    });
  
    // Delete a task when the delete button is clicked
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const taskId = event.target.previousElementSibling.htmlFor;
        deleteTask(taskId);
      });
    });
  });






  