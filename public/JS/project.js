
// Add new team member submit form
const newMemberForm = async (event) => {
    event.preventDefault();

    const full_name = document.querySelector('#full-name').value.trim();
    const github_username = document.querySelector('#github').value.trim();

    if (full_name && github_username) {
        const response = await fetch('/api/project', {
            method: 'POST',
            body: JSON.stringify({full_name, github_username}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/tech');
        } else {
            alert(response.statusText);
        }
    }
};


document
  .querySelector('#add-member-btn')
  .addEventListener('submit', newMemberForm);