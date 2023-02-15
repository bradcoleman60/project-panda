const { Project } = require("../models");

const projectsData = [
  
    {
    title: "Know your Government",
    description: "Welcome to Know Your Government! An app that lets you see how your governement is organized, who can support you best, and what your government official has been doing while holding their office.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/bhaskell7901/know-your-government"
    },
    {
    title: "stats-nba",
    description: "An app used to search for the current season average stats for points, assists, and rebounds for any active player and to search for each NBA teams' logo!",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/SpectreKilo/stats-nba"
    },
    {
    title: "reading-is-fun",
    description: "Reading Is Fun lets users peruse information about books provided by Google Books--with a twist. Users can search by title, author, and/or subject. Clicking on a search result displays the details for that book. The user has the option to add the book to the user's library, and a bookshelf displays all the user's saved books. The user can click on any book in the library to display the details for that book.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/justhenner/reading-is-fun"
    },
    {
    title: "Master Planner 9000",
    description: "Search any major city for a Ticketmaster event, such as Sporting events, Music concerts and more. You can filter your search by genre and date range. On the event cards you will see the name of the event, the date of the event, a price range for tickets and a more button. You can click on the event card to widen it and display the predicted weather for that event, up to 300 days in the future. Once you have found an event you can click on the button to take you to the ticketmaster website to find seating and ticket availabilites.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/byxzESC/01-GroupProject-EventPlanner"
    },
    {
    title: "Full Spectrum",
    description: "FullSpectrum is a website that was created to optimize your inquiries about your job search and housing located in the city that you are interested in. The website will provide the maximum/minimum salary, along with the job listing link. To make an easier decision to be made FullSpectrum housing section provides information about household income, median age range, median property value, and population. The weather section gives a brief insight into the five-day forecasts so you can picture what your future week would look like. FullSpecturm is your one-stop for weather, jobs, and city census data",
    cohort_id: 1,
    project_manager_id: 2,
    github_repo_link: "https://github.com/captaiiinsolo/jobDashboardProject"
    },
    {
      title: "GitYourGameOn",
      description: "Our site provides users with information about upcoming NBA games and has a useful interface to find upcoming games and a link to the page at TicketMaster.com where tickets can be purchased. Additionally, our site provides the user with the current season statistics of three of the top players on each team, for the game that they select. Lastly, our site provides the user the ability to search a database provided by ballDontLie.io for player information and current season statistics.",
      cohort_id: 1,
      project_manager_id: 2,
      github_repo_link: "https://github.com/bradcoleman60/GitYourGameOn"
      },
      {
      title: "Me, My Pet, and I",
      description: "We wanted to help our users connect with shelter dogs waiting to be adopted. Our users are able to search for any dog breed and add their potential pet to their favorites. They will also be able to generate a list of 10 random pet names.",
      cohort_id: 1,
      project_manager_id: 2,
      github_repo_link: "https://github.com/silkyjazz/Me-MyPet-AndI"
      },
      {
      title: "Nibble Nabble",
      description: "On this site we are using Bulma.io as our CSS Framework.",
      cohort_id: 1,
      project_manager_id: 2,
      github_repo_link: "https://github.com/megellman/group-project"
      },
      {
      title: "Jeopardy Trivia Game",
      description: "Welcome to our Random Jeopardy Game, a fun and interactive game that tests your knowledge on a variety of topics. What makes this Jeopardy different from existing apps is that it has no advertisements, it has global high score board, it is simple and has a clean design. It is free to play, has completely random categories & questions and has unique game board on each refresh. Have fun!",
      cohort_id: 1,
      project_manager_id: 2,
      github_repo_link: "https://github.com/mccoydidericksen/jeopardy-game"
      },
      
  {
    title: "New Tech Project",
    description:
      "A simple project that demonstrates the use of a new technology.",
    cohort_id: 2,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user/project1",
  },
  {
    title: "Integration Project ",
    description:
      "A complex project that showcases the integration of multiple technologies.",
    cohort_id: 2,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user/project2",
  },
  {
    title: "User Experience Project ",
    description:
      "A project that focuses on improving the user experience through technology.",
    cohort_id: 2,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user/project3",
  },
  {
    title: "Smart Home Automation System",
    description: "A system that automates various tasks in a home, such as controlling lights and temperature, using voice commands.",
    cohort_id: 2,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user1/smart-home-automation"
    },
    {
    title: "Artificial Intelligence Chatbot",
    description: "A chatbot that uses natural language processing and machine learning to answer questions and provide customer service.",
    cohort_id: 2,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user2/ai-chatbot"
    },
    {
    title: "Blockchain-based Supply Chain Management",
    description: "A decentralized system that uses blockchain technology to track the movement of goods and ensure transparency in supply chain operations.",
    cohort_id: 3,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user3/blockchain-supply-chain"
    },
    {
    title: "Virtual Reality Education Platform",
    description: "A platform that uses virtual reality technology to provide immersive learning experiences for students.",
    cohort_id: 3,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user4/vr-education"
    },
    {
    title: "Internet of Things Monitoring System",
    description: "A system that collects and analyzes data from IoT devices to monitor and control various aspects of a smart home or office.",
    cohort_id: 3,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user5/iot-monitoring"
    }
];

const seedProjects = () => Project.bulkCreate(projectsData);

module.exports = seedProjects;

