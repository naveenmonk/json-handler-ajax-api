const btn = document.getElementById('btn');
btn.addEventListener('click', getUsers);

function getUsers(e) {
  e.preventDefault();

  fetch('users.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach(function (user) {
        output += `
      <hr>
      <ul>
      <li>${user.id}</li>
      <li>${user.name}</li>
      <li>${user.email}</li>
      <li>${user.age}</li>
      </ul>
      `;
      });
      document.getElementById('users').innerHTML = output;
    });
}
