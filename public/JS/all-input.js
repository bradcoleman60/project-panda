
async function createNewProject(event) {

    event.preventDefault();


// Project Details - Query Selectors

const title = document.querySelector('#createTitle').value.trim();
const cohort_id = parseInt(document.querySelector('#createCohort').value.trim());
const github_repo_link = document.querySelector('#createRepo').value.trim();
const description = document.querySelector('#createDescription').value.trim();

//Team Members - Query Selector
const full_name1 = document.querySelector('#full-name1').value.trim();
const github_username1 = document.querySelector('#github1').value.trim();

// const full_name2 = document.querySelector('#full-nam2e').value.trim();
// const github_username2 = document.querySelector('#github2').value.trim();

// const full_name3 = document.querySelector('#full-name3').value.trim();
// const github_username3 = document.querySelector('#github3').value.trim();

// const full_name4 = document.querySelector('#full-name4').value.trim();
// const github_username4 = document.querySelector('#github4').value.trim();

//Tech - Query Selector

var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    const checkBoxValues = [];

    /*For each technology that is checked, iterate the array and create and object that 
    contains the project ID and the technology ID*/
    checkboxes.forEach(el => {
        checkBoxValues.push(el.value)
        
        }
        
    );


// Fetch POST to Server to add all input fields into Project Database Table

// console.log("Title" , title)
// console.log("Cohort" , cohort_id)
// console.log("GitHub" , github_repo_link)
// console.log("Description" , description)
// console.log("Technology" , checkBoxValues)
// console.log("Team full name" , full_name1)
// console.log("Team git hub " , github_username1)

if (title && cohort_id && github_repo_link && description) {
    const response =  await fetch('/api/projects', {
        method: 'POST',
        
        body: JSON.stringify({
            title: title,
            cohort_id: cohort_id,
            github_repo_link: github_repo_link,
            description: description,
            technology: checkBoxValues,
            full_name1: full_name1,
            github_username1: github_username1
        }),
        
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.json()

    }).then((data) => {
        console.log(data)
        var prodManagerId = data.project_manager_id
        document.location.replace('/project/' + prodManagerId)
    })
   
   



};

};

document.querySelector('#add-new-project-btn').addEventListener('click', createNewProject);


///
// Project.create({
//     name: 'My Project',
//     description: 'A project that uses Sequelize'
//   }).then(project => {
//     project.addTeamMembers([1, 2, 3]); // Add team members with IDs 1, 2, and 3
//     project.addTechnologies([4, 5, 6]); // Add technologies with IDs 4, 5, and 6
//   });