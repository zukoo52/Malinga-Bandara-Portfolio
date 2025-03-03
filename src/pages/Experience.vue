<template>
  <div class="experience-page">
    <div class="page-title">
      <h1>professional Journey</h1>
    </div>

    <!-- Work Experience Section -->

    <div class="experience-timeline">
      <div class="experience-card">
        <div class="experience-header">
          <h3>
            Full-Stack Developer Trainee (Part-Time) → Part-Time Developer
          </h3>
          <span class="company">AIO-IT Solutions (Pvt) Ltd </span>
          <span class="duration">Apr 2024 -Present</span>
        </div>
        <p class="description">
          Completed a 6-month weekend-based industrial training program focused
          on enterprise-level software development, emphasizing best practices,
          scalable architecture, and modern full-stack development. Through
          consistent performance and a strong grasp of key concepts, I
          transitioned into a part-time, project-based developer role,
          contributing to real-world applications.
        </p>
        <div class="skills-used">
          <span
            v-for="skill in [
              'Vue.js',
              'Nuxt',
              ' Laravel',
              'MySQL',
              'Git',
              'Agile Methodology',
              'CI/CD',
              'Software Architecture',
            ]"
            :key="skill"
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
        <p>
          <b
            >Industrial Training Program (Apr 2024 – Oct 2024) (Part-Time,
            Weekends)</b
          >
        </p>
        <br />
        <p><i>📌 Program Highlights & Key Learnings:</i></p>
        <ul class="achievements">
          <li>
            Industry-Standard Coding Practices (Clean Code, Design Patterns,
            SOLID Principles)
          </li>
          <li>
            Scalable Architecture & Best Practices for large-scale applications
          </li>
          <li>Full-Stack Development with Vue.js & Laravel</li>
          <li>Database Design & Optimization (MySQL)</li>
          <li>
            Agile Development & Team Collaboration (SCRUM, Sprints, Trello)
          </li>
          <li>Version Control & CI/CD Pipelines (Git, GitHub)</li>
          <li>
            Successfully completed two industrial-level full-stack projects as
            part of a development team
          </li>
        </ul>
        <br />
        <p><b>Part-Time Developer (Oct 2024 – Present)</b></p>
        <ul class="achievements">
          <li>
            Currently working as a frontend developer on a real-world project,
            implementing Nuxt components and optimizing UI performance
          </li>
          <li>
            Developing scalable, maintainable frontend solutions and
            collaborating with backend teams for API integration
          </li>
        </ul><br>
        <div class="research-images">
          <img
            v-for="(img, index) in AIOT"
            :key="index"
            :src="img"
            :alt="'Full-Stack Developer Trainee certification ' + (index + 1)"
            @click="openImageModal(img)"
            class="research-img"
          />
        </div>
      </div>

      <div class="experience-card">
        <div class="experience-header">
          <h3>Trainee Software Engineer (Full-Stack)</h3>
          <span class="company">Appsdept (Pvt) Ltd</span>
          <span class="duration">Mar 2024 – Sep 2024</span>
        </div>
        <p class="description">
          Worked on full-stack development projects, contributing to both
          front-end and back-end development. Gained experience in Laravel,
          Vue.js, Git, Docker, and Jira, while collaborating in an Agile
          development environment.
        </p>
        <div class="skills-used">
          <span
            v-for="skill in [
              'Laravel ',
              'Vue.js',
              'Git',
              'Jira',
              'MySQL',
              'Fedora-Linux-OS',
            ]"
            :key="skill"
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
        <ul class="achievements">
          <li>
            Developed Train Ticket Booking System (Team Collaboration),
            optimizing ticket management workflows
          </li>
          <li>
            Built Online Appointment Management System for hospitals (Team
            Collaboration), streamlining scheduling processes
          </li>
          <li>
            Contributed to 360 Car Care System (Team Collaboration), enhancing
            service station management with a web-based solution
          </li>
          <li>
            Worked with Laravel & Vue.js to build scalable, maintainable
            applications
          </li>
          <li>
            Implemented Docker for containerized deployments, improving
            development efficiency
          </li>
          <li>Managed tasks using Jira, following Agile methodologies</li>
          <li>
            Collaborated with cross-functional teams, participating in code
            reviews, debugging, and feature development
          </li>
        </ul>
        <div class="research-images">
          <img
            v-for="(img, index) in TrainyImages"
            :key="index"
            :src="img"
            :alt="'Research Publication ' + (index + 1)"
            @click="openImageModal(img)"
            class="Full-Stack Developer Trainee certification"
          />
        </div>
      </div>

      <div class="experience-card research-highlight">
        <div class="experience-header">
          <h3>UI/UX Research Project</h3>
          <span class="company"
            >Independent Research | South Eastern University of Sri Lanka</span
          >
          <span class="duration">Dec 2022 - June 2023</span>
        </div>
        <h4 class="research-title">
          STUDY OF GESTALT AND COGNITIVE PSYCHOLOGICAL THEORY INFLUENCE ON UI/UX
        </h4>
        <p class="description">
          A comprehensive research study investigating how Gestalt principles
          and cognitive psychology influence modern UI/UX design. By integrating
          psychological theories with software engineering, this research
          explores how user interfaces can be optimized for efficiency,
          accessibility, and personalization. The study emphasizes the
          combination of behavioral-personalization and self-personalization to
          enhance usability for users of all skill levels.
        </p>

        <h4 class="research-title">Problem Statement:</h4>
        <p class="description">
          As Human-Computer Interaction (HCI) evolves, many user interfaces
          still fail to provide intuitive and efficient experiences,
          particularly for novice users. This research addresses this gap by
          integrating cognitive psychology and software engineering to design
          adaptive UI systems that align with human capabilities and
          limitations.
        </p>
        <br />

        <div class="research-content">
          <div class="research-images">
            <img
              v-for="(img, index) in researchImages"
              :key="index"
              :src="img"
              :alt="' ' + (index + 1)"
              @click="openImageModal(img)"
            />
          </div>

          <div class="research-findings">
            <h5>Key Findings:</h5>
            <ul>
              <li v-for="finding in researchFindings" :key="finding">
                {{ finding }}
              </li>
            </ul>
          </div>
        </div>

        <div class="research-tags">
          <span v-for="tag in researchTags" :key="tag" class="research-tag">{{
            tag
          }}</span>
        </div>
      </div>

      <div class="experience-card">
        <div class="experience-header">
          <h3>Software Engineer Intern</h3>
          <span class="company">Elzian Agro (PVT) Ltd</span>
          <span class="duration">Aug 2022 - Mar 2023 · 8 mos</span>
        </div>
        <p class="description">
          Contributed to the development of React.js & Node.js-based web
          applications, improving user experience and backend efficiency.
        </p>
        <div class="skills-used">
          <span
            v-for="skill in [
              'React.js',
              'Node.js',
              'SQL',
              'Git',
              'Figma',
              'Trello',
              'Agile',
            ]"
            :key="skill"
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
        <ul class="achievements">
          <li>
            Developed and optimized features for Earth Restoration Web App and
            Elzian Agro Soil Monitoring System
          </li>
          <li>
            Designed interactive UI components using Figma & Canva, enhancing
            user engagement
          </li>
          <li>
            Integrated React.js & Node.js with SQL databases, improving data
            management efficiency
          </li>
          <li>
            Collaborated with Agile teams, participating in daily stand-ups &
            sprint planning
          </li>
          <li>
            Improved GitHub workflow, resolving merge conflicts & managing pull
            requests
          </li>
        </ul>
        <div class="research-images">
          <img
            v-for="(img, index) in internImages"
            :key="index"
            :src="img"
            :alt="'Intern software engineering certification ' + (index + 1)"
            @click="openImageModal(img)"
            class="research-img"
          />
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div v-if="selectedImage" class="image-modal" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="closeImageModal">&times;</span>
        <img :src="selectedImage" alt="Research Publication" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      selectedImage: null,
      researchImages: [
        "/Experience/Research/research01.jpg",
        "/Experience/Research/research02.jpg",
        "/Experience/Research/research03.jpg",
      ],
      internImages: ["/Experience/WorkLetters/InternServiceLetter.jpg"],
      TrainyImages: ["/Experience/WorkLetters/TrainySoftwareEngineer.jpg"],
      AIOT: [
        "/Experience/WorkLetters/AIOTCerificaion.jpg",
        "/Experience/WorkLetters/AIOTLetter.jpg",
      ],
      researchDescription: `A comprehensive research study investigating how Gestalt principles and cognitive psychology
       influence modern UI/UX design. By integrating psychological theories with software engineering,
        this research explores how user interfaces can be optimized for efficiency, accessibility, and personalization.
        The study emphasizes the combination of behavioral-personalization and self-personalization to enhance usability
         for users of all skill levels.`,
      researchFindings: [
        "Bridging psychology and software engineering improves UI usability and adaptability.",
        "Identified Gestalt principles that significantly influence user perception and interaction.",
        "Analyzed cognitive load patterns to create more effective UI layouts.",
        " Developed a framework for integrating cognitive and Gestalt psychology into software-based UI/UX solutions.",
        " Conducted user testing to evaluate the impact of personalization in UI design.",
        "Published findings in three academic publications on UI/UX research.",
      ],
      researchTags: [
        "UI/UX Research & Design",
        "Psychology-Driven UI",
        "Gestalt Psychology & Cognitive Theory",
        "Human-Computer Interaction (HCI)",
        "Software Development for Usability Optimization",
        "Behavioral-Personalization & Self-Personalization in UX",
        " Cognitive Load Analysis for Software Systems",
        " Prototyping & Implementing UI Systems",
      ],
    };
  },
  methods: {
    openImageModal(image) {
      this.selectedImage = image;
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    },
    closeImageModal() {
      this.selectedImage = null;
      document.body.style.overflow = "auto"; // Re-enable scrolling
    },
  },
};
</script>

<style scoped>
.experience-page {
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

.experience-timeline {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.experience-timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: #333;
}

.experience-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0 30px 30px;
  position: relative;
  border: 1px solid #333;
  transition: transform 0.3s ease;
}

.experience-card::before {
  content: "";
  position: absolute;
  left: -35px;
  top: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #7c3aed;
  border: 3px solid #1a1a1a;
}

.experience-card:hover {
  transform: translateX(10px);
}

.experience-header {
  margin-bottom: 15px;
}

.experience-header h3 {
  color: #fff;
  font-size: 1.4rem;
  margin: 0 0 5px 0;
}

.company {
  color: #7c3aed;
  font-weight: 500;
  margin-right: 15px;
}

.duration {
  color: #666;
  font-size: 0.9rem;
}

.description {
  color: #aaa;
  line-height: 1.6;
  margin: 15px 0;
}

.skills-used {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.skill-tag {
  background: #2d2d2d;
  color: #e1e1e1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: #3d3d3d;
  transform: translateY(-2px);
}

.achievements {
  list-style-type: none;
  padding: 0;
  margin: 15px 0 0 0;
}

.achievements li {
  color: #aaa;
  margin: 8px 0;
  padding-left: 20px;
  position: relative;
  line-height: 1.4;
}

.achievements li::before {
  content: "•";
  color: #7c3aed;
  position: absolute;
  left: 0;
  font-size: 1.2em;
}

.section-title {
  text-align: center;
  margin: 60px 0 30px;
}

.section-title h2 {
  font-size: 2rem;
  color: #fff;
  position: relative;
  display: inline-block;
}

.section-title h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 2px;
}

.research-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.research-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.research-card h3 {
  color: #fff;
  font-size: 1.6rem;
  margin-bottom: 20px;
  text-align: center;
}

.research-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.research-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.research-images img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.research-images img:hover {
  transform: scale(1.05);
}

.research-description {
  color: #aaa;
  line-height: 1.6;
}

.research-highlights {
  margin: 20px 0;
}

.research-highlights h4 {
  color: #fff;
  margin-bottom: 10px;
}

.research-highlights ul {
  list-style-type: none;
  padding: 0;
}

.research-highlights li {
  padding-left: 20px;
  position: relative;
  margin-bottom: 10px;
}

.research-highlights li::before {
  content: "•";
  color: #7c3aed;
  position: absolute;
  left: 0;
  font-size: 1.2em;
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.research-tags span {
  background: #2d2d2d;
  color: #e1e1e1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.research-tags span:hover {
  background: #3d3d3d;
  transform: translateY(-2px);
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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

.close-button {
  position: absolute;
  top: -40px;
  right: -40px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .experience-page {
    padding: 20px 10px;
  }

  .experience-card {
    margin-left: 20px;
  }

  .experience-card::before {
    left: -25px;
  }

  .experience-timeline::before {
    left: 0;
  }

  .research-content {
    grid-template-columns: 1fr;
  }

  .research-card h3 {
    font-size: 1.4rem;
  }

  .research-images {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .research-img {
    height: 150px;
  }

  .close-button {
    top: -30px;
    right: -10px;
  }
}
</style>
