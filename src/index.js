import './index.css';
//import api
import {getUsers} from './api/usersApi';
//get the table from api
getUsers().then(res => {
  let usersOutput = '';
  res.forEach(user => {
    usersOutput+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  window.document.getElementById("usersOutput").innerHTML = usersOutput;




});
