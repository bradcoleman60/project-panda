
// Add new team member submit form
const newMemberForm = async (event) => {
    event.preventDefault();

    const full_name = document.querySelector('#full-name').value.trim();
    const github_username = document.querySelector('#github').value.trim();
    console.log("full_name: ", full_name)
    console.log("github_username: ", github_username)
    if (full_name && github_username) {
        const response = await fetch('/api/users/addMember', {
            method: 'POST',
            body: JSON.stringify({full_name, github_username}),
            headers: {'Content-Type': 'application/json'},
        });
        // if user's full_name and github_username is provided, the Add member button will add them to the database and clears input fields
        if (response.ok) {
            document.location.replace('/createMember');
        } else {
            alert(response.statusText);
        }
    }
};


document
  .querySelector('#add-member-btn')
  .addEventListener('click', newMemberForm);


// when 'Add Technology' button is clicked, display technologies pages for user to choose
document
  .querySelector('#addTech')
  .addEventListener('click', function(e){
    e.preventDefault();
    document.location.replace('/tech');
  });



