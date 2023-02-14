
const createNewProjectAll = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#createTitle').value.trim();
    const cohort_id = parseInt(document.querySelector('#createCohort').value.trim());
    const github_repo_link = document.querySelector('#createRepo').value.trim();
    const description = document.querySelector('#createDescription').value.trim();


    console.log("title: ", title)
    console.log("cohort:" , cohort_id)
    console.log("repo: ", github_repo_link)
    console.log("github_url: ", description)
    // console.log("Current User:", req.session.project_manager_id)

    if (title && cohort_id && github_repo_link && description) {
        const response = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify({title, cohort_id, github_repo_link, description}),
            headers: {'Content-Type': 'application/json'},
        });
        // if user's full_name and github_username is provided, the Add member button will add them to the database and clears input fields
        if (response.ok) {

            const getProject_ID = await fetch('/api/projects', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            })

            console.log(response.body)
            document.location.replace('/createMember' + getProject_ID);
        } else {
            alert(response.statusText);
        }
    }
};


document
  .querySelector('#newMember')
  .addEventListener('click', createNewProjectAll);

