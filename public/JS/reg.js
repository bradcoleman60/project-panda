const registerForm = async (event) => {
    event.preventDefault();
  
    const regUsername = document.querySelector('#regUsername').value.trim();
    const regPassword = document.querySelector('#regPassword').value.trim();
  
    if (regUsername && regPassword) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({regUsername, regPassword}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/project/' + id);
      } else {
        alert(response.statusText);
      }
    } console.log(registerForm);
  };

  document
    .querySelector('#regBtn')
    .addEventListener('click', registerForm);
  