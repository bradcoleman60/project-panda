// Submits the Selected Tech from the new project work flow

async function mySubmitForm(event)  {

    event.preventDefault();
    //This selects all items on technology checkbox form if they are checked
    var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    const checkBoxValues = [];

    /*For each technology that is checks, iterate the array and create and object that 
    contains the project ID and the technology ID*/
    checkboxes.forEach(el => {
        const techObject = {
            project_id: 5,
            technology_id: el.value
        };
        //Then push the object into an array called "CheckBoxValues"
        checkBoxValues.push(techObject)
    })

    console.log("check box Value:" , checkBoxValues)

    /* If the Project Manager selects at least one technology then a FETCH / POST request 
    is sent to the server along with the "checkBoxValues" array*/
    if (checkBoxValues.length >0 ) {
        const response = await fetch('/api/technologies', {
            method: 'POST',
            body: JSON.stringify({checkBoxValues}),
            headers: {'Content-Type': 'application/json'},
        }); 

        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert("NOT ENTERED",response.statusText);
        }
    } else {alert("Please select at least one technology")}
};

//Event Listener for button submit 
document.querySelector('#add-tech-btn').addEventListener('click', mySubmitForm);

