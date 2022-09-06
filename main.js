fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    
    let li = `<th>UserId</th><th>Id</th><th>Title</th> <th>Completed</th>`;

    json.forEach((user) => {
      li += `<tr>
        <td>${user.userId}</td>
        <td>${user.id} </td>
        <td>${user.title}</td>
        <td>${user.completed}</td>
      </tr>`;
    });

    document.getElementById("users").innerHTML = li;
  });

