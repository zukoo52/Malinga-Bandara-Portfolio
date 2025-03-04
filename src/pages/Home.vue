<template>
  <div class="home">
    <!-- Hero Section with Neural Network Animation -->
    <section class="hero">
      <div class="neural-network-bg"></div>
      <div class="hero-content">
        <div class="hero-image">
          <img src="@/assets/me7.png" alt="Malinga Bandara" />
        </div>
        <h1 class="glitch-text" data-text="Malinga Bandara">Malinga Bandara</h1>
        <div class="typewriter">
          <span class="typed-text"></span>
          <span class="cursor"></span>
        </div>
        <p class="hero-description">
          "Software Engineer | AI & Prompt Engineering | Psychology Enthusiast"
        </p>
        <div class="cta-buttons">
          <button class="primary-btn" @click="scrollToSection('about')">
            About Me
          </button>
          <button class="secondary-btn" @click="$router.push('/Contacts')">
            Contact Me
          </button>
          <button
            class="primary-btn"
            @click="scrollToSection('download-resume')"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="content-wrapper">
        <div class="profile-section">
          <div class="image-section">
            <img
              class="developer-image"
              src="@/assets/me (2).png"
              alt="Developer"
            />
          </div>
          <div class="about-content">
            <h2>About Me! ✌️</h2>
            <p>
              🚀 I’m a passionate software engineer with experience in
              full-stack development, AI, and prompt engineering. I hold a
              Bachelor's degree in Information and Communication Technology
              (Software Technology) from South Eastern University of Sri Lanka
              (February 2024).
            </p><br>
            <p>
              My expertise includes building web applications using Laravel,
              Vue, and modern AI-driven solutions. I’m also deeply interested in
              human psychology, cognitive science, and personal
              development—applying mindset strategies to continuously grow both
              personally and professionally.
            </p><br>
            <p>
              With hands-on experience in AI, automation, and full-stack
              development, I’m always exploring innovative ways to create
              impactful and scalable digital solutions. Let’s build something
              amazing! 💡💻
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Overview -->
    <section class="experience-section">
      <div class="content-wrapper">
        <h2>Experience Snapshot 💼</h2>
        <div class="experience-timeline">
          <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>{{ exp.role }}</h3>
                <span class="company">{{ exp.company }}</span>
                <span class="duration">{{ exp.duration }}</span>
              </div>
              <p>{{ exp.description }}</p>
              <div class="skill-tags">
                <span v-for="skill in exp.skills" :key="skill">{{
                  skill
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-footer">
          <router-link to="/Experience" class="view-more-btn">
            View Full Experience History <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills & Expertise section -->
    <section class="soft-skills-section">
      <div class="content-wrapper">
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">Click on any category to explore more</p>

        <div class="skills-table">
          <!-- Tech Stack -->
          <div class="skill-category">
            <div class="category-header" @click="toggleCategory('techStack')">
              <div class="header-content">
                <i class="fas fa-code"></i>
                <h3>Tech Stack</h3>
              </div>
              <i
                :class="[
                  'fas',
                  activeCat === 'techStack'
                    ? 'fa-chevron-up'
                    : 'fa-chevron-down',
                ]"
              ></i>
            </div>
            <div class="category-content" v-show="activeCat === 'techStack'">
              <div class="tech-grid">
                <div
                  class="tech-item"
                  v-for="tech in techStack"
                  :key="tech.name"
                >
                  <i :class="tech.icon"></i>
                  <div class="tech-details">
                    <h4>{{ tech.name }}</h4>
                    <div class="progress-bar">
                      <div
                        class="progress"
                        :style="{ width: tech.level + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Soft Skills -->
          <div class="skill-category">
            <div class="category-header" @click="toggleCategory('softSkills')">
              <div class="header-content">
                <i class="fas fa-brain"></i>
                <h3>Soft Skills</h3>
              </div>
              <i
                :class="[
                  'fas',
                  activeCat === 'softSkills'
                    ? 'fa-chevron-up'
                    : 'fa-chevron-down',
                ]"
              ></i>
            </div>
            <div class="category-content" v-show="activeCat === 'softSkills'">
              <div class="skills-grid">
                <div
                  class="skill-item"
                  v-for="skill in softSkills"
                  :key="skill.name"
                >
                  <div class="skill-info">
                    <i :class="skill.icon"></i>
                    <div class="skill-details">
                      <h4>{{ skill.name }}</h4>
                      <p>{{ skill.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hobbies -->
          <div class="skill-category">
            <div class="category-header" @click="toggleCategory('hobbies')">
              <div class="header-content">
                <i class="fas fa-heart"></i>
                <h3>Hobbies & Interests</h3>
              </div>
              <i
                :class="[
                  'fas',
                  activeCat === 'hobbies' ? 'fa-chevron-up' : 'fa-chevron-down',
                ]"
              ></i>
            </div>
            <div class="category-content" v-show="activeCat === 'hobbies'">
              <div class="hobbies-grid">
                <div
                  class="hobby-item"
                  v-for="hobby in hobbies"
                  :key="hobby.name"
                >
                  <i :class="hobby.icon"></i>
                  <div class="hobby-details">
                    <h4>{{ hobby.name }}</h4>
                    <p>{{ hobby.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Languages -->
          <div class="skill-category">
            <div class="category-header" @click="toggleCategory('languages')">
              <div class="header-content">
                <i class="fas fa-language"></i>
                <h3>Languages</h3>
              </div>
              <i
                :class="[
                  'fas',
                  activeCat === 'languages'
                    ? 'fa-chevron-up'
                    : 'fa-chevron-down',
                ]"
              ></i>
            </div>
            <div class="category-content" v-show="activeCat === 'languages'">
              <div class="languages-grid">
                <div
                  class="language-item"
                  v-for="lang in languages"
                  :key="lang.name"
                >
                  <div class="language-info">
                    <span class="language-flag">{{ lang.flag }}</span>
                    <div class="language-details">
                      <h4>{{ lang.name }}</h4>
                      <p>{{ lang.level }}</p>
                    </div>
                    <div class="progress-bar">
                      <div
                        class="progress"
                        :style="{ width: lang.percentage + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="projects-section">
      <div class="content-wrapper">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">Some of my recent work</p>

        <div class="projects-grid">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-card"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-links">
                  <a
                    :href="project.liveUrl"
                    target="_blank"
                    v-if="project.liveUrl"
                    class="project-link"
                  >
                    <i class="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    :href="project.githubUrl"
                    target="_blank"
                    v-if="project.githubUrl"
                    class="project-link"
                  >
                    <i class="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-footer">
          <router-link to="/Projects" class="view-more-btn">
            View All Projects <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Education Card -->
    <section class="education-overview">
      <div class="content-wrapper">
        <h2>Academic Background</h2>
        <div class="education-grid">
          <div class="edu-card">
            <div class="card-content">
              <div class="card-header">
                <i class="fas fa-graduation-cap"></i>
                <span class="edu-tag"
                  >Bachelor of Information and Communication Technology (BICT)
                  (Hons)</span
                >
              </div>
              <h4>Specialization - Software Technology</h4>
              <p class="university">South Eastern University of Sri Lanka</p>
              <div class="edu-details">
                <span class="duration">
                  <i class="fas fa-calendar-alt"></i>
                  2024
                </span>
                <span class="grade"> </span>
              </div>

              <div class="skills-container">
                <span>Software Development</span>
                <span>Full-Stack Development</span>
                <span>Cloud Computing</span>
                <span>Network Administration</span>
                <span>Project Management</span>
                <span>Cybersecurity</span>
                <span>Artificial Intelligence (AI)</span>
                <span>Mobile Application Development</span>
                <span>Software Testing</span>
                <span>System Integration</span>
              </div>
            </div>
          </div>

          <!-- Certifications Card -->
          <div class="edu-card">
            <div class="card-content">
              <div class="card-header">
                <i class="fas fa-certificate"></i>
                <span class="edu-tag">Professional Certifications</span>
              </div>
              <div class="cert-list">
                <div class="cert-item">
                  <div class="cert-info">
                    <h4>Fundamentals of NuxtJS</h4>
                    <p class="cert-provider">Board Infinity</p>
                  </div>
                  <span class="cert-date">January 2025</span>
                </div>

                <div class="cert-item">
                  <div class="cert-info">
                    <h4>JavaScript for Web Development</h4>
                    <p class="cert-provider">Board Infinity</p>
                  </div>
                  <span class="cert-date">December 2024</span>
                </div>

                <div class="cert-item">
                  <div class="cert-info">
                    <h4>Open Source Software Development Methods</h4>
                    <p class="cert-provider">The Linux Foundation</p>
                  </div>
                  <span class="cert-date">February 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-footer">
          <router-link to="/Education" class="explore-btn">
            <span>View Full Academic Profile</span>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Research Section -->
    <section class="research-section">
      <div class="content-wrapper">
        <h2>Research Work 📚</h2>
        <div class="research-card">
          <h3>UI/UX Psychology Research</h3>
          <div class="research-content">
            <div class="research-images">
              <img
                v-for="(img, index) in researchImages"
                :key="index"
                :src="img"
                :alt="'Research Publication ' + (index + 1)"
                @click="openImageModal(img)"
              />
            </div>
            <div class="research-info">
              <h3>
                STUDY OF GESTALT AND COGNITIVE PSYCHOLOGICAL THEORY INFLUENCE ON
                UI/UX
              </h3>
              <p>
                A comprehensive research study investigating how Gestalt
                principles and cognitive psychology influence modern UI/UX
                design. By integrating psychological theories with software
                engineering, this research explores how user interfaces can be
                optimized for efficiency, accessibility, and personalization.
                The study emphasizes the combination of
                behavioral-personalization and self-personalization to enhance
                usability for users of all skill levels.
              </p>
              <br />
              <h3>Problem Statement</h3>
              <p>
                As Human-Computer Interaction (HCI) evolves, many user
                interfaces still fail to provide intuitive and efficient
                experiences, particularly for novice users. This research
                addresses this gap by integrating cognitive psychology and
                software engineering to design adaptive UI systems that align
                with human capabilities and limitations.
              </p>
              <div class="research-tags">
                <span v-for="tag in researchTags" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <div class="ResearchLink">
              <router-link to="/Experience" class="view-more-btn">
                View Full Research Details <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div v-if="selectedImage" class="image-modal" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="closeImageModal">&times;</span>
        <img :src="selectedImage" alt="Research Publication" />
      </div>
    </div>
    <DownloadResume id="download-resume" />
  </div>
</template>

<script>
import DownloadResume from "@/components/AboutUs/DownloadResume.vue";
export default {
  components: {
    DownloadResume,
  },
  name: "Home",
  data() {
    return {
      selectedImage: null,
      researchImages: [
        "/public/Experience/Research/research01.jpg",
        "/public/Experience/Research/research02.jpg",
        "/public/Experience/Research/research03.jpg",
      ],
      researchTags: [
        "UI/UX Research & Design",
        "Psychology-Driven UI",
        "Gestalt Psychology & Cognitive Theory",
        "Human-Computer Interaction (HCI)",
        "Software Development for Usability Optimization",
        "Behavioral-Personalization & Self-Personalization in UX",
        "Cognitive Load Analysis for Software System",
        "Prototyping & Implementing UI Systems",
      ],
      experiences: [
        {
          id: 1,
          role: "Trainee Software Engineer (Full-Stack)",
          company: "Appsdept (Pvt) Ltd",
          duration: "Mar 2024 – Sep 2024",
          description:
            " Worked on full-stack development projects, contributing to both  front-end and back-end development. Gained experience in Laravel,Vue.js, Git, Docker, and Jira, while collaborating in an Agile development environment.",
          skills: [
            "Laravel ",
            "Vue.js",
            "Git",
            "Jira",
            "MySQL",
            "Fedora-Linux-OS",
          ],
        },
        {
          id: 2,
          role: "Software Engineer Intern",
          company: "Elzian Agro (PVT) Ltd",
          duration: "JAug 2022 - Mar 2023",
          description:
            "Contributed to the development of React.js & Node.js-based web applications, improving user experience and backend efficiency",
          skills: [
            "React.js",
            "Node.js",
            "SQL",
            "Git",
            "Figma",
            "Trello",
            "Agile",
          ],
        },
      ],
      activeCat: "softSkills",
      softSkills: [
        {
          name: "AI & Automation",
          icon: "fas fa-robot",
          description:
            "Optimizing AI responses and automating tasks for greater efficiency",
          level: 90,
        },
        {
          name: "Problem Solving & Critical Thinking",
          icon: "fas fa-brain",
          description:
            "Strong analytical skills for solving complex problems and making data-driven decisions",
          level: 95,
        },
        {
          name: "Psychology & Emotional Intelligence",
          icon: "fa-solid fa-braille",
          description:
            "Applying psychological principles and emotional intelligence for personal growth and decision-making",
          level: 85,
        },
        {
          name: "Communication, Collaboration & Leadership",
          icon: "fas fa-users",
          description:
            "Effective communicator, team player, and proactive leader driving collaboration and results",
          level: 90,
        },
        {
          name: "Adaptability & Time Management",
          icon: "fas fa-sync-alt",
          description:
            "Quickly adjusting to new challenges while efficiently managing time and priorities",
          level: 90,
        },
      ],
      techStack: [
        { name: "Vue.js", icon: "fab fa-vuejs" },
        { name: "Laravel", icon: "fab fa-laravel", level: 85 },
        { name: "JavaScript", icon: "fab fa-js", level: 88 },
        { name: "PHP", icon: "fab fa-php", level: 85 },
        { name: "AI", icon: "fas fa-brain", level: 85 },
        { name: "Prompt Engineering", icon: "fas fa-keyboard", level: 90 },
        { name: "ChatGPT API", icon: "fas fa-robot", level: 88 },
        { name: "HTML5", icon: "fab fa-html5", level: 95 },
        { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
        { name: "Git", icon: "fab fa-git-alt", level: 85 },
        { name: "MySQL", icon: "fas fa-database", level: 80 },
        { name: "Docker", icon: "fab fa-docker", level: 75 },
      ],
      hobbies: [
        {
          name: "Software Development & Open Source",
          icon: "fas fa-laptop-code",
          description:
            "Building applications with languages like PHP, JavaScript, Python, and contributing to open-source projects",
        },
        {
          name: "Tech Exploration & AI",
          icon: "fas fa-microchip",
          description:
            "Exploring new technologies, trends in software development, and advancements in AI",
        },
        {
          name: "Automation & Tool Integration",
          icon: "fas fa-cogs",
          description:
            "Integrating tech tools to automate tasks, improve efficiency, and optimize automation processes",
        },
        {
          name: "Physical Fitness & Resilience",
          icon: "fas fa-dumbbell",
          description:
            "Improving strength, fitness, and mental resilience through weightlifting and boxing",
        },
        {
          name: "Psychology & Personal Growth",
          icon: "fa-solid fa-hexagon-nodes",
          description:
            "Studying human behavior, cognitive biases, decision-making, and applying principles for personal growth",
        },
        {
          name: "Content Creation & Learning",
          icon: "fas fa-pen-fancy",
          description:
            "Creating content on psychology, self-optimization, AI-driven videos, and continuously learning for professional growth",
        },
      ],
      languages: [
        {
          name: "Sinhala",
          flag: "🇱🇰",
          level: "Native Speaker",
          percentage: 100,
        },
        {
          name: "English",
          flag: "🇬🇧",
          level: "Professional Working Proficiency",
          percentage: 90,
        },
      ],
      projects: [
        {
          id: 1,
          title: "Nuxt.js & WordPress Integration",
          description:
            "This project is a front-end web application that allows students to find qualified tutors and book sessions while enabling teachers to bid on tutoring requests. It ensures an interactive and user-friendly experience through a well-designed UI.",
          image: "/public/Projects/me.png",
          // liveUrl: "https://ecommerce-demo.com",
          githubUrl:
            "https://github.com/zukoo52/-Nuxt.js-WordPress-Integration.git",
          technologies: ["Vue.js", "WordPress", "REST API"],
        },
        {
          id: 2,
          title: "Online Tutor Booking System - Front End (E-Tutor)",
          description:
            "A collaborative task management system with real-time updates, file sharing, and team communication features.",
          image: "/public/Projects/OnlineTutorBooking/onlineTutorFrontEnd1.png",
          // liveUrl: "https://task-manager-demo.com",
          githubUrl: "https://github.com/yourusername/task-manager",
          technologies: ["Vue.js", "Vue Router", "Vuex", "SCSS"],
        },
        {
          id: 3,
          title: "Client Management System - Backend",
          description:
            "This is the backend API for the Client Management System, built with Laravel using the Repository Pattern for better code organization. It provides a secure and structured way to manage client data and handle authentication.",
          image: "/public/Projects/ClientCrud/image (4).png",
          liveUrl: "https://ai-content-demo.com",
          githubUrl: "https://github.com/yourusername/ai-content",
          technologies: [
            "Laravel",
            "MySQL",
            "Repository Pattern",
            "API Resources",
          ],
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    },
    openImageModal(image) {
      this.selectedImage = image;
    },
    closeImageModal() {
      this.selectedImage = null;
    },
    toggleCategory(category) {
      this.activeCat = this.activeCat === category ? null : category;
    },
  },
  mounted() {
    // Initialize typewriter effect
    const texts = [
      "Software Engineer",
      "Full Stack Developer",
      "AI & Prompt Engineering",
      "Mindset & Personal Growth Enthusiast",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50;

    const type = () => {
      const currentText = texts[textIndex];
      const typedText = document.querySelector(".typed-text");

      if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 100;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 50;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  },
};
</script>

<style scoped>
.home {
  position: relative;
  background: #0a0a0a;
  color: #fff;
  width: 100%;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  padding: 2rem 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: 0;
  width: 100%;
}

.hero-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 30px;
  border: 3px solid #7c3aed;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
  animation: float 6s ease-in-out infinite;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.neural-network-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 30% 20%,
      rgba(45, 212, 191, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 80%,
      rgba(124, 58, 237, 0.1) 0%,
      transparent 50%
    );
  z-index: 1;
}

.hero-content {
  text-align: center;
  z-index: 2;
  padding: 20px;
  width: 100%;
}

.glitch-text {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  position: relative;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: glitch 500ms infinite;
}

.typewriter {
  margin: 20px 0;
  min-height: 40px;
}

.typed-text {
  font-size: 1.5rem;
  color: #7c3aed;
}

.cursor {
  display: inline-block;
  width: 3px;
  height: 1em;
  background: #7c3aed;
  margin-left: 5px;
  animation: blink 1s infinite;
}

.hero-description {
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: #aaa;
  margin: 20px 0;
  padding: 0 1rem;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.primary-btn,
.secondary-btn {
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.primary-btn {
  background: #7c3aed;
  color: #fff;
  border: none;
}

.secondary-btn {
  background: transparent;
  color: #fff;
  border: 2px solid #7c3aed;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-3px);
}

/* Content Sections */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

section {
  padding: 80px 0;
}

section h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
}

/* About Section */
.profile-section {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  align-items: start;
  flex-direction: column;
}

.developer-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
}

.about-content {
  width: 100%;
  text-align: justify;
}

/* Research Section */
.research-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 30px;
  margin-top: 30px;
}

.research-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.research-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.research-images img {
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.research-images img:hover {
  transform: scale(1.05);
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.research-tags span {
  background: #2d2d2d;
  color: #fff;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.9rem;
}

/* Experience Section */
.experience-timeline {
  position: relative;
  padding-left: 30px;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 30px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: #333;
}

.timeline-item::after {
  content: "";
  position: absolute;
  left: -4px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #7c3aed;
}

.timeline-content {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
}

.timeline-header {
  margin-bottom: 15px;
}

.timeline-header h3 {
  color: #fff;
  margin-bottom: 5px;
}

.company {
  color: #7c3aed;
  margin-right: 15px;
}

.duration {
  color: #aaa;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.skill-tags span {
  background: #2d2d2d;
  color: #fff;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.9rem;
}

/* Soft Skills Section Redesign */
.soft-skills-section {
  padding: 6rem 0;
  background: linear-gradient(
    to bottom,
    rgba(18, 18, 18, 0.98),
    rgba(18, 18, 18, 0.95)
  );
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #bbb;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.skills-table {
  max-width: 100%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 1rem;
}

.skill-category {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-category:last-child {
  border-bottom: none;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
}

.category-header:hover {
  background: rgba(255, 255, 255, 0.05);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-content i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.header-content h3 {
  font-size: 1.3rem;
  color: #fff;
  margin: 0;
}

.category-content {
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
}

/* Skill Items */
.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.05);
}

.skill-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-info i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.skill-details h4 {
  color: #fff;
  margin-bottom: 0.3rem;
}

.skill-details p {
  color: #bbb;
  font-size: 0.9rem;
  margin: 0;
}

.skill-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 200px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: var(--primary-color);
  border-radius: 3px;
  transition: width 0.6s ease;
}

.percentage {
  color: var(--primary-color);
  font-weight: bold;
  min-width: 45px;
  text-align: right;
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.05);
}

.tech-item i {
  font-size: 1.8rem;
  color: var(--primary-color);
}

.tech-details {
  flex: 1;
}

.tech-details h4 {
  color: #fff;
  margin-bottom: 0.5rem;
}

/* Hobbies Grid */
.hobbies-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.hobby-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.hobby-item:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.05);
}

.hobby-item i {
  font-size: 2rem;
  color: var(--primary-color);
}

.hobby-details h4 {
  color: #fff;
  margin-bottom: 0.3rem;
}

.hobby-details p {
  color: #bbb;
  font-size: 0.9rem;
  margin: 0;
}

/* Languages Grid */
.languages-grid {
  display: grid;
  gap: 1rem;
}

.language-item {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.language-item:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.05);
}

.language-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-flag {
  font-size: 1.8rem;
}

.language-details {
  flex: 1;
}

.language-details h4 {
  color: #fff;
  margin-bottom: 0.3rem;
}

.language-details p {
  color: #bbb;
  font-size: 0.9rem;
  margin: 0;
}

.projects-section {
  background: linear-gradient(
    to bottom,
    rgba(18, 18, 18, 0.98),
    rgba(18, 18, 18, 0.95)
  );
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: #7c3aed;
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  background: #7c3aed;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #6d28d9;
  transform: translateY(-2px);
}

.project-link i {
  font-size: 0.9em;
  transition: transform 0.3s ease;
}

.project-link:hover i {
  transform: translateX(3px);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.project-description {
  color: #bbb;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-tag {
  background: rgba(124, 58, 237, 0.1);
  color: #7c3aed;
  padding: 0.4rem 1rem;
  border-radius: 15px;
  font-size: 0.85rem;
  border: 1px solid rgba(124, 58, 237, 0.2);
}

/* Brief Education and Certifications */
.education-overview {
  padding: 5rem 0;
  background: linear-gradient(to bottom, rgba(124, 58, 237, 0.05), transparent);
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.edu-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(124, 58, 237, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  overflow: hidden;
}

.edu-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #7c3aed, #2563eb);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.edu-card:hover {
  transform: translateY(-5px);
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.edu-card:hover::before {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
}

.edu-tag {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(124, 58, 237, 0.1);
  color: #7c3aed;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.edu-card h3 {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.university {
  color: #7c3aed;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.edu-details {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.edu-details span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.edu-details i {
  color: #7c3aed;
}

.edu-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skills-container span {
  padding: 0.4rem 1rem;
  background: rgba(124, 58, 237, 0.05);
  border: 1px solid rgba(124, 58, 237, 0.1);
  color: var(--text-secondary);
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.skills-container span:hover {
  background: rgba(124, 58, 237, 0.1);
  border-color: rgba(124, 58, 237, 0.2);
  transform: translateY(-2px);
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.cert-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(124, 58, 237, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.cert-item:hover {
  background: rgba(124, 58, 237, 0.05);
  transform: translateX(5px);
}

.cert-info h4 {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.cert-provider {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.cert-date {
  color: #7c3aed;
  font-size: 0.9rem;
  font-weight: 500;
}

.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
  color: white;
  border-radius: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.explore-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.2);
  gap: 1.25rem;
}

.explore-btn i {
  transition: transform 0.3s ease;
}

.explore-btn:hover i {
  transform: translateX(3px);
}

.section-footer {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

@media (max-width: 1024px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .edu-card {
    padding: 1.5rem;
  }

  .edu-card h3 {
    font-size: 1.5rem;
  }

  .cert-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .cert-date {
    align-self: flex-start;
  }
}

@media (max-width: 968px) {
  .skills-table {
    grid-template-columns: 1fr;
  }

  .skill-category {
    grid-column: auto;
  }

  .two-columns {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hobbies-grid {
    grid-template-columns: 1fr;
  }
}

/* Image Modal */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.modal-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
}

/* Animations */
@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
      0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
      0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .profile-section {
    grid-template-columns: 1fr;
  }

  .research-content {
    grid-template-columns: 1fr;
  }

  .image-section {
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .glitch-text {
    font-size: 3rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  section h2 {
    font-size: 2rem;
  }

  .hero,
  .about-section,
  .research-section,
  .experience-section {
    margin-left: 0;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1rem;
  }

  .hero-content {
    padding: 1rem;
  }

  .hero-image img {
    max-width: 150px;
  }

  .glitch-text {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 0.9rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .primary-btn,
  .secondary-btn {
    padding: 10px 20px;
  }

  .about-section {
    padding: 2rem 1rem;
  }

  .profile-section {
    gap: 1rem;
  }

  .image-section {
    max-width: 200px;
  }

  .about-content {
    padding: 1rem;
  }

  .research-section {
    padding: 2rem 1rem;
  }

  .research-card {
    padding: 1rem;
  }

  .research-content {
    gap: 1rem;
  }

  .experience-section {
    padding: 2rem 1rem;
  }

  .timeline-item {
    padding: 1rem;
  }

  .skills-table {
    padding: 1rem;
  }

  .project-card {
    padding: 1rem;
  }

  .project-image {
    height: 150px;
  }

  .project-content {
    padding: 1rem;
  }

  .edu-card {
    padding: 1rem;
  }
}
</style>
