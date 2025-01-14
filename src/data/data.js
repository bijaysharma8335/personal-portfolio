import weatherImage from "../assets/images/weather-app.png";
import adminImage from "../assets/images/admin.png";
import taskImage from "../assets/images/task.png";
import adminSnapshot1 from "../assets/images/adminsnap.png";
import adminSnapshot2 from "../assets/images/adminsnap1.png";
import weatherSnapshot1 from "../assets/images/weatherSnap1.png";
import weatherSnapshot2 from "../assets/images/weatherSnap2.png";

export const skills = [
    { name: "HTML5", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    {
        name: "CSS3",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    },
    { name: "Bootstrap", image: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" },
    { name: "Javascript", image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    {
        name: "ReactJs",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },

    {
        name: "Tailwind",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
    },
    {
        name: "NodeJs",
        image: "https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg",
    },

    { name: "Mongodb", image: "https://www.svgrepo.com/show/303232/mongodb-logo.svg" },
    {
        name: "Git",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bFxDR8h_MGbVFZqh5e0hF94TmW_d8dpIeA&s",
    },
    {
        name: "Github",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/1024px-Github-desktop-logo-symbol.svg.png",
    },
];

export const projects = [
    {
        id: 1,
        title: "Search Weather App",
        description:
            " A  real-time  Weather App that provides information about the temperature, humidity levels, and wind direction,",
        imageUrl: weatherImage, // Replace with your image URL
        liveLink: "https://bijaysharma8335.github.io/weather-Display/",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        tags: ["Web App", "Personal", "Frontend"],
        TechStack:
            "ReactJS: For building a responsive and dynamic front-end interface, Tailwind CSS: For sleek, customizable, and mobile-friendly styling.@Syncfusion Dependencies: For high-quality, interactive data visualization components like charts, grids, and tables.",

        snapshots: [weatherSnapshot1, weatherSnapshot2],
    },
    {
        id: 2,
        title: "Admin Dashboard",
        description:
            "A dashboard for  advanced, feature-rich application designed for managing and monitoring e-commerce operations. It provides a comprehensive set of tools for analyzing sales data, tracking orders, managing products, and viewing customer statistics—all in one place. The dashboard uses modern web technologies to ensure a smooth, responsive user experience across different devices.",
        imageUrl: adminImage,
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        tags: ["Web App", "Personal", "Frontend"],
        liveLink: "https://web-admin-dashboard.netlify.app/",
        snapshots: [adminSnapshot1, adminSnapshot2],
    },
    {
        id: 3,
        title: "Task Management System",
        description:
            "A simple  efficient Task Management System designed forusers users to add, edit, update, and delete tasks with ease and categorizes tasks into completed and pending statuses, allowing users to keep track of their progress ",
        imageUrl: taskImage,
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        tags: ["Web App", "Personal", "Frontend"],
        liveLink: "https://web-admin-dashboard.netlify.app/",

        snapshots: [taskImage, taskImage],
    },
];

export const id = "1zt1A95VmGmvux-W-gvPSnZefyfTDybqF";
