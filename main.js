fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    
    let li = `<th>UserId</th> <th>Id</th> <th>Title</th> <th>Completed</th>`;

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

function myFunction() {
    // Declare variables
     
    let filter = document.getElementById("myInput").value.toUpperCase();
    let table = document.getElementById('users');
    let tr = table.getElementsByTagName('tr');
  
    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  
