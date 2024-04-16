import User from './classes/User.js';
class UserManager {
  
  constructor() {
    this.users = [];
    this.currentId = 0;
    this.initEvents();
  }

  initEvents() {
    const form = document.querySelector('#userForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.handleFormSubmit();
    })
  }

  handleFormSubmit()  {
    const id = document.querySelector('#userId').value;
    const name = document.querySelector('#userName').value;
    const email = document.querySelector('#userEmail').value;

    this.addUser(name, email);
  }

  //* CREATE - Crear un usuario
  addUser(name, email) {
    //* this.currentId = this.currentId + 1;    
    const newUser = new User(this.currentId++, name, email);
    this.users.push(newUser);
    this.renderUsers();
  }

  //* READ - Leer información del usuario
  getUser(id) {

  }

  //* UPDATED - Actualizar el usuario

  updateUser(id, name, email) {

  }

  //* DELETE - Eliminar el usuario

  deleteUser(id) {

  }

  //* Renderizar el html y  mostrar al usuario
  renderUsers() {
    const tableBody = document.querySelector('#userTableBody');
    tableBody.innerHTML = '';
    this.users.forEach((user) => {
      const row =`
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button onclick="#" class="btn btn-secondary">generic</button>
          <button onclick="#" class="btn btn-secondary">generic</button>
        </td>
      </tr>
      `;

      tableBody.innerHTML += row;
        // tableBody.innerHTML = tableBody.innerHTML + row;
    });
  

  }
}

const userManager = new UserManager();
