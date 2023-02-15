# ProjectPanda

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [About the Author](#about-the-author)
5. [License](#license)


[Deployed Site](https://pure-depths-43598.herokuapp.com/)


# **Description**

The goal of Project Panda is two-fold.  The main goal is to help web developers in coding bootcamps complete project plan documentation.   This eliminates the need to use word processing applications like Word or Google Docs.  Having complete project plans prior to embarking on developing any code can be very helpful in ensuring that all salient project details are documented and communicated to team members. The second goal of Project Panda is to allow future coding bootcamp students and teachers reference prior projects.  Project details like team members, description and technologies used can be easily viewed by cohort.  

Below is a gif of the site: 

![screenshot](./public/images/Project%20Panda.gif)


# **Highlighted Code Example**

The following is code that we created that we would like to highlight.  

This first block of renders the check boxes for the create project stream where the project manager adds the respective technology to be used on the project. The "filterByTechCategory" (in the /helpers directory) is a helper function
that selects only the technology badge, id, and link for the technologies in that respective category. This also uses a partial in file "tech-list-partial.handlebars" to render the technology list for the specific category.

The Technology partial generates the checkbox for each technology in the Technologies table. The data that comes into this partial comes from the "tech-check-list.handlebars" file --}}

```
<form id="checkbox-form">
<div class="col">

  {{!-- ROW 1 --}}
  <div class="row">
    <div class="col p-2 m-3 border border-dark bg-dark text-white">
      <h3 class="border border-dark p-1 m-1 text-center">Node</h3>
      {{#each (filterByTechCategory techList "Node")}}
      {{> tech-list-partial}}
      {{/each}}
    </div>

// Helper Function 

module.exports = {
    filterByTechCategory: (array, category) => {
        return array.filter((item) => item.category === category);
    },
};

// Technology Partial

<div class="form-check ms-2">
    <input class="form-check-input" type="checkbox" value="{{this.id}}" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
        <a href='{{this.url}}' target="_blank"><img src='{{this.badge}}' alt='{{this.name}}'></a>
    </label>
</div>

```

# **Testing** 

To test to ensure the code rendered the desired output we iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

| User Acceptance Criteria | Test Result | 
| ------------- |:-------------| 
|1. As a Project Manager I want to be able to login so that I can create a new project.  |**Completed**.  A new user can login to the site  |
|2. As a Project Manager I want to navigate to the home page so that I can view a list of my projects.   |**Completed**.  On login the project manager is taken to a list of his/her projects.      |
|3. As a Project Manager I want To Add title, description, and other attributes to the project So that I can add required information for the project.   |**Completed**.  On the create projects page the project manager can enter title description and other attributes to a project      |
|4. As a Project Manager I want to add team members so that I can see who worked on the project.  |**Completed**.  The project manager can add one team member to the project   |
|5. As a Project Manager I want to select from a list of common technologies by category of model, view, controller So that I can add the selected technologies to the profile.  |**Completed**.  The project manager can select from a list of technologies to add them to the project.      |
|6. As a Visitor I want to able to select a bootcamp cohort so that I can see a list of projects. |**Completed**.  The visitor can see projects by cohort       |
|7. As a Visitor I want to be able to click on a project title so that I can see the details of the project.  |**Completed**.  As a visitor I can see the details of a project       |
|8. As a Visitor I want to able to navigate back to the dashboard so that I can see a list of projects and click a new project.  |**Completed**.  A visitor can navigate back to the home page.       |





# **Technology Used and Credits**

| Technology Used | Resource URL | 
| ------------- |:-------------| 
| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) | 
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |
| <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"> | [https://dev.mysql.com/doc/refman/8.0/en/](https://dev.mysql.com/doc/refman/8.0/en/) |
| <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"> | [https://sequelize.org/](https://sequelize.org/) |

# **About the Authors**

### Fayven Amelga
* [Portfolio](https://famelga.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/fayven-amelga-b09b17b6/)
* [Github](https://github.com/famelga)

### Gladys Ange Isingizwe
* [Email](gladyisingizwe@gmail.com)
* [LindeIn](www.linkedin.com/in/gladys-isingizwe)
* [Github](https://github.com/Isglad)

### Jasmine Ulloa
* [Email](ulloajazz6@gmail.com)
* [LinkedIn](www.linkedin.com/in/jasmineulloa)
* [Github](www.github.com/silkyjazz)

### Brad Coleman
* [Email](bradcoleman60@gmail.com)
* [Linkedin](https://www.linkedin.com/in/brad-coleman-109529/)
* [GitHub](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



