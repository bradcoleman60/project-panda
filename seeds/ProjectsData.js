const { Project } = require("../models");

const projectsData = [
  {
    title: "New Tech Project",
    description:
      "A simple project that demonstrates the use of a new technology.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user/project1",
  },
  {
    title: "Integration Project ",
    description:
      "A complex project that showcases the integration of multiple technologies.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user/project2",
  },
  {
    title: "User Experience Project ",
    description:
      "A project that focuses on improving the user experience through technology.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user/project3",
  },
  {
    title: "Smart Home Automation System",
    description: "A system that automates various tasks in a home, such as controlling lights and temperature, using voice commands.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user1/smart-home-automation"
    },
    {
    title: "Artificial Intelligence Chatbot",
    description: "A chatbot that uses natural language processing and machine learning to answer questions and provide customer service.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user2/ai-chatbot"
    },
    {
    title: "Blockchain-based Supply Chain Management",
    description: "A decentralized system that uses blockchain technology to track the movement of goods and ensure transparency in supply chain operations.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user3/blockchain-supply-chain"
    },
    {
    title: "Virtual Reality Education Platform",
    description: "A platform that uses virtual reality technology to provide immersive learning experiences for students.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user4/vr-education"
    },
    {
    title: "Internet of Things Monitoring System",
    description: "A system that collects and analyzes data from IoT devices to monitor and control various aspects of a smart home or office.",
    cohort_id: 1,
    project_manager_id: 1,
    github_repo_link: "https://github.com/user5/iot-monitoring"
    }
];

const seedProjects = () => Project.bulkCreate(projectsData);

module.exports = seedProjects;
