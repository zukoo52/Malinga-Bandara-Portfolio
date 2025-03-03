<template>
  <div class="about-me-banner">
    <h1 class="main-heading">
      Hi, I'm Malinga Bandara 🌟 <br />
      A Fresh Graduate 🎓 & Aspiring Software Engineer 💻
    </h1>

    <div class="content-wrapper">
      <!-- Main Info Section -->
      <section class="main-info">
        <div class="profile-section">
          <div class="image-section">
            <img class="developer-image" src="@/assets/me.png" alt="Developer" />
          </div>
          <div class="about-section">
            <h2>About Me! ✌️</h2>
            <p>
              🎓 I'm a recent graduate from South Eastern University of Sri Lanka (February 2024) and currently gaining hands-on experience as a trainee software engineer 💻 🖋️ 🚀.
            </p>
            <p>
              My focus is on UI/UX design 🎨 and web application development 👨🏼‍💻 using Laravel and Vue. With about a year of experience, I'm just getting started in this exciting journey, eager to learn 📚, grow 🌱, and create meaningful digital solutions 🌟.
            </p>
            <div class="contact-section">
              <p>Let's connect and build something amazing together! 🤝</p>
              <button class="banner-btn" @click="$router.push('/Contacts')">
                Contact Me 💌
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Research Highlight Section -->
      <section class="research-highlight">
        <h2>Research Work 📚</h2>
        <div class="research-card">
          <h3>UI/UX Psychology Research</h3>
          <div class="research-content">
            <div class="research-images">
              <img v-for="(img, index) in researchImages" 
                   :key="index" 
                   :src="img" 
                   :alt="'Research Publication ' + (index + 1)"
                   @click="openImageModal(img)" />
            </div>
            <div class="research-info">
              <h4>STUDY OF GESTALT AND COGNITIVE PSYCHOLOGICAL THEORY INFLUENCE ON UI/UX</h4>
              <p>Conducted comprehensive research on how psychological principles influence modern interface design, focusing on user perception and interaction patterns.</p>
              <div class="research-tags">
                <span v-for="tag in researchTags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Overview Section -->
      <section class="experience-overview">
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
                <span v-for="skill in exp.skills" :key="skill">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Image Modal -->
    <div v-if="selectedImage" class="image-modal" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="closeImageModal">&times;</span>
        <img :src="selectedImage" alt="Research Publication">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: null,
      researchImages: [
        '/research-publication-1.jpg',
        '/research-publication-2.jpg',
        '/research-publication-3.jpg'
      ],
      researchTags: [
        'UI/UX Research',
        'Gestalt Psychology',
        'Cognitive Theory',
        'HCI'
      ],
      experiences: [
        {
          id: 1,
          role: "Full Stack Developer",
          company: "Example Tech",
          duration: "Jan 2023 - Present",
          description: "Working on developing and maintaining web applications using modern technologies.",
          skills: ["Vue.js", "Laravel", "UI/UX"]
        },
        {
          id: 2,
          role: "Frontend Developer Intern",
          company: "Tech Startup",
          duration: "Jun 2022 - Dec 2022",
          description: "Worked on the company's main product interface and implemented new features.",
          skills: ["Vue.js", "TailwindCSS", "JavaScript"]
        }
      ]
    }
  },
  methods: {
    openImageModal(image) {
      this.selectedImage = image;
    },
    closeImageModal() {
      this.selectedImage = null;
    }
  }
}
</script>

<style scoped>
.about-me-banner {
  background-color: #0a0a0a;
  color: #fff;
  padding: 40px 20px;
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main-heading {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 40px;
  position: relative;
}

.main-heading::after {
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

.main-info {
  margin-bottom: 60px;
}

.profile-section {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  align-items: start;
}

.image-section {
  position: relative;
}

.developer-image {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #fff;
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 15px 0;
  color: #aaa;
}

.contact-section {
  margin-top: 30px;
}

.banner-btn {
  padding: 12px 24px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  color: #fff;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.banner-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Research Section Styles */
.research-highlight {
  margin: 60px 0;
}

.research-highlight h2 {
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #fff;
  position: relative;
  display: inline-block;
}

.research-highlight h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 2px;
}

.research-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 30px;
  border: 1px solid #333;
}

.research-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.research-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.research-images img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.research-images img:hover {
  transform: scale(1.05);
}

.research-info h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 15px;
}

.research-info p {
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 20px;
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

/* Experience Section Styles */
.experience-overview {
  margin: 60px 0;
}

.experience-overview h2 {
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #fff;
  position: relative;
  display: inline-block;
}

.experience-overview h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 2px;
}

.experience-timeline {
  position: relative;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: #333;
}

.timeline-item {
  margin-left: 30px;
  padding: 20px;
  position: relative;
  margin-bottom: 30px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -36px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #7c3aed;
  border: 3px solid #1a1a1a;
}

.timeline-content {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 20px;
  border: 1px solid #333;
}

.timeline-header {
  margin-bottom: 15px;
}

.timeline-header h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.company {
  color: #7c3aed;
  margin-right: 15px;
}

.duration {
  color: #666;
  font-size: 0.9rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
}

.skill-tags span {
  background: #2d2d2d;
  color: #e1e1e1;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
}

/* Image Modal Styles */
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
  backdrop-filter: blur(5px);
}

.image-modal .modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.image-modal img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
}

.image-modal .close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.image-modal .close-btn:hover {
  color: #7c3aed;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .profile-section {
    grid-template-columns: 1fr;
  }

  .image-section {
    max-width: 300px;
    margin: 0 auto;
  }

  .research-content {
    grid-template-columns: 1fr;
  }

  .research-images {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .main-heading {
    font-size: 2rem;
  }

  .content-wrapper {
    padding: 10px;
  }

  .research-images {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .research-images img {
    height: 100px;
  }

  .timeline-item {
    margin-left: 20px;
  }

  .timeline-item::before {
    left: -26px;
  }
}
</style>
