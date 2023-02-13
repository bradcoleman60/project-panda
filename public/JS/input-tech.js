// Submits the Selected Tech from the new project work flow

async function mySubmitForm(event)  {

    event.preventDefault();

    var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    const checkBoxValues = [];

    checkboxes.forEach(el => {
        const techObject = {
            project_id: 5,
            technology_id: el.value
        };
        checkBoxValues.push(techObject)
        // console.log(el.value)
    })

    console.log("check box Value:" , checkBoxValues)

    
    // var form = document.getElementById("checkbox-form");
    // const checkBoxValues = [];
    var project_id = 5;

    // for (var i = 0; i < checkboxes.length; i++) {
        // if (checkboxes.elements[i].type == "checkbox" && checkboxes.elements[i].checked) {
        //   values.push(form.elements[i].value);
    
    // }
    //   }
    //   console.log(checkBoxValues)

    if (checkBoxValues.length >0 ) {
        const response = await fetch('/api/technologies', {
            method: 'POST',
            body: JSON.stringify({checkBoxValues}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert(response.statusText);
        }
    }
};

//Event Listener for button submit 
document.querySelector('#add-tech-btn').addEventListener('click', mySubmitForm);

