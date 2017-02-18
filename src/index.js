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
  //delete links
  const deleteLinks = document.getElementsByClassName('deleteUser');
  Array.from(deleteLinks,link => {
    link.onclick = function(e){
      e.preventDefault();
      const element = e.target;
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });



});
