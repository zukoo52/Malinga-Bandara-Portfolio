<template>
  <div class="projects-page">
    <div class="page-title">
      <h1>Projects</h1>
    </div>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @open-modal="openProjectModal"
      />
    </div>
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close-modal="closeProjectModal"
    />
  </div>
</template>

<script>
import ProjectCard from "@/components/project/ProjectCard.vue";
import ProjectModal from "@/components/project/ProjectModal.vue";

export default {
  components: {
    ProjectCard,
    ProjectModal,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Nuxt.js & WordPress Integration",
          description:
            "A full-stack web application built with Nuxt.js (frontend) and WordPress (headless CMS) using REST API.",
          fullDescription:
            "This project demonstrates how to create a server-side rendered (SSR) and static site generated (SSG) application using Nuxt 3 while fetching content dynamically from WordPress.",
          image: "/public/Projects/me.png",
          images: ["/public/Projects/me.png"],
          technologies: [
            "Nuxt.js 3",
            "Vue.js",
            "WordPress REST API",
            "TailwindCSS",
            "Vue Router",
            "Node.js",
            "Axios",
          ],
          tasks: [
            "Developed frontend with Nuxt.js & Vue.js",
            "Integrated WordPress as a headless CMS",
            "Implemented REST API for fetching dynamic content",
            "Created SEO-friendly dynamic routes using Nuxt",
            "Designed responsive UI with TailwindCSS",
            "Optimized performance with Static Site Generation (SSG)",
            "Configured Vue Router for seamless navigation",
          ],
          myTasks: [
            {
              title: "Individual Project",

              status: "completed",
            },
          ],
          type: "frontend",
          githubLink:
            "https://github.com/zukoo52/client-management-frontend.git",
          //detailsLink: "https://yourwebsite.com/project",
          figmaLink:
            "https://www.figma.com/design/XC8I77zh8Ptlm4joeRyGWy/Task-client-Management?node-id=0-1&t=XmD5PHzEZb6RkZvJ-1",
        },
        {
          id: 1,
          title: " Front-End Client Management System ",
          description:
            "This system allows you to add, update, and view client details in a well-organized interface.",
          fullDescription:
            " Client Management System Front-End  built with Vue.js & Vuetify to streamline client data handling, enhance productivity, and simplify record-keeping. This system allows you to add, update, and view client details in a well-organized interface.",
          image: "/public/Projects/ClientCrud/image (4).png",
          images: [
            "/public/Projects/ClientCrud/image (1).png",
            "/public/Projects/ClientCrud/image (2).png",
            "/public/Projects/ClientCrud/image (3).png",
            "/public/Projects/ClientCrud/image (4).png",
          ],
          technologies: [
            "Vue.js",
            "Vuetify",
            "Axios",
            "Created REST API endpoints for client data management",
            "Vue Router",
          ],
          tasks: [
            "Designed and developed the front-end using Vue.js & Vuetify",
            "Created REST API",
            "Designed a responsive and user-friendly UI",
            "Implemented CRUD functionalities for client management",
            "Configured Vue Router for navigation",
            "Optimized performance and improved user experience",
          ],
          myTasks: [
            {
              title: "Individual Project",

              status: "completed",
            },
          ],
          type: "frontend",
          githubLink:
            "https://github.com/zukoo52/client-management-frontend.git",
          //detailsLink: "https://yourwebsite.com/project",
          figmaLink:
            "https://www.figma.com/design/XC8I77zh8Ptlm4joeRyGWy/Task-client-Management?node-id=0-1&t=XmD5PHzEZb6RkZvJ-1",
        },

        {
          id: 2,
          title: "🗄️ Client Management System - Backend",
          description:
            "The backend API for the Client Management System, built with Laravel using the Repository Pattern for better code organization.",
          fullDescription:
            "This is the backend API for the Client Management System, built with Laravel using the Repository Pattern for better code organization. It provides a secure and structured way to manage client data and handle authentication.",
          image: "/public/Projects/ClientCrud/image (4).png",
          images: ["/public/Projects/ClientCrud/image (4).png"],
          technologies: [
            "Laravel",
            "MySQL",
            "Repository Pattern",
            "API Resources",
          ],
          tasks: [
            "Designed and developed RESTful API endpoints using Laravel",
            "Developed client CRUD operations with validation and error handling",
            "Implemented Repository Pattern for structured code management",
            "Integrated MySQL database with migrations and seeders",
            "Added pagination and filtering for optimized data retrieval",
            "Created API resources for structured JSON responses",
            "Tested API using Postman collection and fixed errors",
          ],
          myTasks: [],
          type: "backend",
          githubLink:
            "https://github.com/zukoo52/Client-Management-BackEnd.git",
          detailsLink: "https://yourwebsite.com/project",
          figmaLink: "https://www.figma.com/file/yourdesign",
        },
        {
          id: 3,
          title: "Online Tutor Booking System - Front End (E-Tutor)",
          description:
            "A Vue.js-powered online platform that connects students with tutors, providing seamless scheduling, bidding, and interactive learning experiences.",
          fullDescription:
            "This project is a front-end web application that allows students to find qualified tutors and book sessions while enabling teachers to bid on tutoring requests. It ensures an interactive and user-friendly experience through a well-designed UI.",
          image: "/public/Projects/OnlineTutorBooking/onlineTutorFrontEnd1.png",
          images: [
            "/public/Projects/OnlineTutorBooking/onlineTutorFrontEnd.png",
          ],
          technologies: ["Vue.js", "Vue Router", "Vuex", " SCSS "],
          tasks: [
            "Designed and developed the Home Page UI using Figma.",
            "Implemented the Home Page, ensuring a user-friendly and responsive design.",
            "Developed the Header and Footer components for seamless navigation.",
            "Created the 'All Tutors' page, allowing users to browse available tutors.",
            "Integrated Vue Router for smooth page navigation.",
          ],

          type: "frontend",
          githubLink:
            "https://github.com/zukoo52/Front-End-Online-Tutor-Booking-System-E-Tutor.git",
          // detailsLink: "https://yourwebsite.com/project",
          figmaLink: "https://www.figma.com/file/yourdesign",
        },
        {
          id: 4,
          title: "Online Tutor Booking System - E-Tutor (Back-End)",
          description:
            "The back-end of the E-Tutor Online Tutor Booking System, developed using Laravel, enabling students to find tutors, request lessons, and schedule sessions while tutors can bid on requests and manage bookings.",
          fullDescription:
            "This Laravel-based system provides a backend framework for managing user authentication, tutor requests, session scheduling, and bidding features. It includes a RESTful API, role-based authentication, and a structured database to ensure smooth interactions between students, tutors, and admins.",
          image: "/public/Projects/OnlineTutorBooking/onlineTutorFrontEnd1.png",
          images: [
            "/public/Projects/OnlineTutorBooking/online tutor ER.drawio (2).png",
          ],
          technologies: ["Laravel", "MySQL", "Sanctum", "REST API"],
          tasks: [
            "Implemented authentication using Laravel Sanctum",
            "Developed REST API for tutor-student interactions",
            "Designed database schema and migrations",
            "Created bidding system for tutor requests",
            "Developed task APIs for session management",
            "Organized project folder structure for maintainability",
            "Created models and set up relationships",
            "Implemented repository methods for data interaction",
            "Developed review hall section for tutor feedback",
          ],
          myTasks: [
            {
              title: "This is Group Project",
            },
          ],
          type: "backend",
          githubLink:
            "https://github.com/zukoo52/Online-Tutor-Booking-System-E-Tutor-Back-End",

          detailsLink: "https://yourwebsite.com/project",
          figmaLink: "https://www.figma.com/file/yourdesign",
        },
        {
          id: 5,
          title: "360 Car Care Center - ERP System",
          description:
            "A full-stack ERP system designed for automobile service centers to manage customers, appointments, services, inventory, and billing. Built with Laravel for the backend, Blade templating, Vue.js for frontend, and Sanctum for authentication, providing a seamless and scalable solution for vehicle maintenance businesses.",
          fullDescription:
            "360 Car Care Center is an enterprise resource planning (ERP) system designed specifically for automobile service centers. It allows businesses to efficiently manage customer information, appointments, services, inventory, billing, and more. The project is built using Laravel (backend), Blade templating, and Vue.js (frontend), with Sanctum used for authentication. The system is designed to handle a range of functionalities, from customer management to detailed reports, all accessible through a user-friendly interface.",

          image: "/public/Projects/carCare360/carcare.png",
          images: [
            "/public/Projects/carCare360/carcare.png",
            "/public/Projects/carCare360/carcare360.png",
          ],
          technologies: [
            "Laravel",
            "Blade",
            "Vue.js",
            "Sanctum",
            "MySQL",
            "Git",
            "Docker",
            "Postman",
          ],
          tasks: [
            "Led the project as the project leader",
            "Maintained and ensured the functionality of the code",
            "Assigned tasks and monitored the progress of the team",
            "Performed SSRS documentation",
            "Analyzed client requirements",
            "Created folder structure and database models",
            "Developed and migrated database files",
            "Built model hall parts for users, mechanics, vehicles, and branches",
            "Created CRUD operations for vehicle and branch models",
            "Connected backend functionality with frontend UI",
            "Collaborated on UI/UX design and functionality testing",
          ],
          myTasks: [
            {
              title: "Group Project",
              status: "completed",
            },
          ],
          type: "fullstack",
          githubLink: "https://github.com/zukoo52/360-Car-Care-Center.git",
          // detailsLink: "https://yourwebsite.com/project",
          // figmaLink: "https://www.figma.com/file/yourdesign",
        },
        {
          id: 6,
          title: "Shopping Cart System - Frontend",
          description:
            "A sleek and responsive shopping cart system built with Vue.js, Vuetify, and CSS. This practice-based group project is designed to enhance frontend development skills while delivering a seamless e-commerce experience.",
          fullDescription:
            "The Shopping Cart System is a modern e-commerce platform developed to provide users with a smooth shopping experience. It features user-friendly navigation, product browsing, reviews, secure checkout, and user authentication. The project is built with Vue.js, Vuetify, and CSS, making it highly responsive and visually appealing. It connects to a backend API for user authentication, product data management, and checkout functionalities.",

          image: "/public/Projects/shoppingcart/shoppingCart (2).png",
          images: ["/public/Projects/shoppingcart/shoppingCart (1).png"],
          technologies: [
            "Vue.js",
            "Vuetify",
            "CSS",
            "Vue Router",
            "Vuex (Optional)",
          ],
          tasks: [
            "UI Development",
            "Login and Authentication",
            "Design Review Page",
            "Login & Signup Pages",
            "Review API Integration",
          ],
          myTasks: [
            {
              title: "Group Project",
            },
          ],
          type: "frontend",
          githubLink:
            "https://github.com/zukoo52/ShoppingCart-Ecommerse-site-Front-End-.git",
          // detailsLink: "https://yourwebsite.com/project",
          // figmaLink: "https://www.figma.com/file/yourdesign",
        },
        {
          id: 7,
          title: "Shopping Cart System - Backend",
          description:
            "Backend for a modern e-commerce platform built using Laravel, providing authentication, product management, cart functionality, and order processing.",
          fullDescription:
            "This backend system is built with Laravel and provides the necessary endpoints for user authentication, product management, cart management, and order processing. It is designed to work seamlessly with a Vue.js frontend counterpart for a full-stack shopping cart system. Key features include user registration, JWT authentication, product CRUD operations, cart management, and order processing.",

          image: "/public/Projects/shoppingcart/shoppingCart (2).png",
          images: [
            "/public/Projects/shoppingcart/shoppingCart (2).png",
            "/public/Projects/shoppingcart/review.png",
          ],
          technologies: ["Laravel", "MySQL", "PHP"],
          tasks: [
            "Review Management Module - Models and Migration File",
            "Signup and Login Page",
            "Review CRUD Operations",
            "Connect Review Frontend with Controller",
            "Create REST API for Review Management",
            "Postman Collection for API Testing",
          ],
          myTasks: [
            {
              title: "Group Project",
              status: "completed",
            },
          ],
          type: "backend",
          githubLink:
            "https://github.com/zukoo52/ShoppingCart-Ecommerce-Site-Backend.git",
          // detailsLink: "https://yourwebsite.com/project",
          // figmaLink: "https://www.figma.com/file/yourdesign",
        },
        {
          id: 8,
          title: "Gym Management System 🏋️‍♂️",
          description:
            "A full-stack Gym Management System built using C# and Visual Studio, designed to help gym owners manage customer registrations, payments, notifications, health reports, and workout schedules.",
          fullDescription:
            "This Gym Management System provides an efficient and user-friendly way for gym owners to manage various aspects of gym operations. It handles customer registration, membership management, payment tracking, notifications, health reports, workout schedules, and generates relevant reports for gym administrators.",

          image: "/public/Projects/GymManagement/gymManagement (1).png",
          images: [
            "/public/Projects/GymManagement/gymManagement (2).png",
            "/public/Projects/GymManagement/gymManagement (1).png",
            "/public/Projects/GymManagement/gymManagement (3).png",
          ],
          technologies: [
            "C#",
            ".NET Framework",
            "Microsoft SQL Server",
            "Entity Framework",
            "Crystal Reports",
          ],
          tasks: [
            "Customer Registration & Profile Management",
            "Track Memberships & Renewals",
            "Payment Fee Tracking & Notifications",
            "Generate Invoices & Reports",
            "Create Custom Workout Schedules",
            "Track Health & Workout Progress",
            "Set Up Database & Connection Strings",
            "Build & Run Application",
          ],
          myTasks: [
            {
              title: "Individua Project",
              status: "completed",
            },
          ],
          type: "fullstack",
          githubLink:
            "https://github.com/yourusername/Gym-Management-System.git",
          // detailsLink: "https://yourwebsite.com/project",
          // figmaLink: "https://www.figma.com/file/yourdesign",
        },
        {
          id: 9,
          title: "Cylone Antiques - E-Commerce Website 🏺✨",
          description:
            "An exclusive E-Commerce platform for antique lovers to browse, purchase, and track rare antiques, built using PHP.",
          fullDescription:
            "Cylone Antiques is a full-stack e-commerce platform designed for antique lovers. It allows users to browse, purchase, and manage antique items. Admins can manage products, orders, and users, while customers enjoy features like cart management, order tracking, and wishlists.",

          image: "/public/Projects/images (18).jpeg",
          images: ["/public/Projects/images (18).jpeg"],
          technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "AJAX",
            "jQuery",
          ],
          tasks: [
            "User Authentication & Login",
            "Product Browsing & Search",
            "Add to Cart & Secure Checkout",
            "Wishlist & Order History",
            "Admin Product Management",
            "Admin Order Management",
            "Inventory & Stock Updates",
            "Sales Reports Generation",
            "Set Up Database & Configuration",
            "Run Project Locally",
          ],
          myTasks: [
            {
              title: "individual Project",
              status: "completed",
            },
          ],
          type: "fullstack",
          githubLink: "https://github.com/zukoo52/E-commerce-Web-Site.git",
          // detailsLink: "https://yourwebsite.com/project",
          // figmaLink: "https://www.figma.com/file/yourdesign",
        },
      ],
      selectedProject: null,
    };
  },
  methods: {
    openProjectModal(project) {
      this.selectedProject = project;
    },
    closeProjectModal() {
      this.selectedProject = null;
    },
  },
};
</script>

<style scoped>
.projects-page {
  padding: 120px 20px 80px;
  min-height: 100vh;
  background-color: #0a0a0a;
}

.page-title {
  text-align: center;
  margin-bottom: 60px;
  padding: 0 20px;
}

.page-title h1 {
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.page-title h1::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 2px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.projects-grid::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  width: 2px;
  background: #333;
  transform: translateX(-50%);
  z-index: 0;
}

@media (max-width: 768px) {
  .projects-page {
    padding: 20px 10px;
  }

  .page-title h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px;
  }

  .projects-grid::before {
    left: 20px;
    transform: none;
  }
}
</style>

<!-- import ProjectCard from "@/components/project/ProjectCard.vue";
import ProjectList from "@/components/project/ProjectList.vue";
import ProjectModal from "@/components/project/ProjectModal.vue"


export default {
  components: {

    ProjectCard,
    ProjectList,
    ProjectModal,
  },
}; -->
