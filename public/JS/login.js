
const loginForm = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#logUsername').value.trim();
  const password = document.querySelector('#logPassword').value.trim();

<<<<<<< Updated upstream
  
  if (username && password) {

      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {'Content-Type': 'application/json'},
      });

      if (response.ok) {
        console.log(response);
        var userData = await response.json();
        var id = userData.user.id;
        console.log(userData.user, id);
          document.location.replace('/project/' + id);
      } else {
          alert(response.statusText);
      }
  }
}; 
 



const registerForm = async (event) => {
    event.preventDefault();
  
    const regUsername = document.querySelector('#regUsername').value.trim();
    const regPassword = document.querySelector('#regPassword').value.trim();
  
    if (regUsername && regPassword) {
=======
  console.log(username, password);
  if (username && password) {
>>>>>>> Stashed changes
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {'Content-Type': 'application/json'},
      });

      if (response.ok) {
          document.location.replace('/projects/:id');
      } else {
          alert(response.statusText);
      }
  }
};  



// const registerForm = async (event) => {
//     event.preventDefault();
  
//     const regUsername = document.querySelector('#regUsername').value.trim();
//     const regPassword = document.querySelector('#regPassword').value.trim();
  
//     if (regUsername && regPassword) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/projects:id');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  
  document
    .querySelector('#logBtn')
    .addEventListener('click', loginForm);
  
<<<<<<< Updated upstream
  document
    .querySelector('#regBtn')
    .addEventListener('click', registerForm);
=======
//   document
//     .querySelector('#regBtn')
//     .addEventListener('click', registerForm);
>>>>>>> Stashed changes
  