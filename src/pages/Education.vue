<template>
  <div class="education-page">
    <div class="page-title">
      <h1>Education</h1>
    </div>

    <div class="education-timeline">
      <!-- Main Education Section -->
      <div class="education-card">
        <h3 class="timeline-title">Higher Education</h3>
        <div class="education-details">
          <h3>
            Bachelor of Information and Communication Technology (BICT) Honours
            degree with a specialization in Software Technology
          </h3>
          <br />
          <h4>South Eastern University of Sri Lanka</h4>
          <p class="graduation-date">Graduated: February 2024</p>

          <div class="skills-container">
            <h5>Key Areas:</h5>
            <div class="skills-tags">
              <span
                v-for="skill in [
                  'Software Development',
                  'Full-Stack Development',
                  'Cloud Computing',
                  'Business Intelligence',
                  'Cybersecurity',
                  'Mobile Application Development',
                  'Data Analytics',
                  'Database Management',
                  'Network Administration',
                  'Project Management',
                  'Artificial Intelligence (AI)',
                  'Web Development',
                  'Software Testing',
                  'System Integration',
                  'DevOps',
                  'Machine Learning',
                  'UI/UX Design',
                  'Blockchain Technology',
                  'Embedded Systems',
                  'Internet of Things (IoT)',
                ]"
                :key="skill"
                class="skill-tag"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="certifications-section">
        <h2>Professional Certifications</h2>
        <div class="linkedin-button-container">
          <a
            href="https://www.linkedin.com/in/malinga-bandara-670095145/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-cert-button"
          >
            <i class="fab fa-linkedin"></i>
            View All Certifications on LinkedIn
          </a>
        </div>
        <div class="certifications-grid">
          <div
            v-for="(cert, index) in certifications"
            :key="cert.id"
            class="certification-card"
            :class="{ 'in-progress': cert.status === 'In Progress' }"
          >
            <div class="cert-header">
              <img
                :src="cert.image"
                :alt="cert.title"
                @click="openImagePreview(cert.image)"
                class="cert-image"
              />
              <div class="cert-info">
                <h3>{{ cert.title }}</h3>
                <h4>{{ cert.issuer }}</h4>
                <p>{{ cert.date }}</p>
                <span v-if="cert.status === 'In Progress'" class="status-badge"
                  >In Progress</span
                >
              </div>
            </div>
            <div class="cert-links" v-if="cert.credentialUrl">
              <a
                :href="cert.credentialUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="credential-link"
              >
                <i class="fas fa-external-link-alt"></i>
                View Credential
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Other Qualifications Section -->
      <div class="education-card additional-learning">
        <h3 class="timeline-title">Additional Studies</h3>
        <div class="education-details">
          <h3>Diploma in Psychology and Counselling</h3>
          <h4>Ceylon Counselling & Psychology Research Center</h4>
          <p class="graduation-date">Expected Completion: December 2025</p>
          <p class="status-badge">Currently Pursuing</p>
          <div class="skills-container">
            <h5>Areas of Study:</h5>
            <div class="skills-tags">
              <span
                v-for="skill in [
                  'Counseling Psychology',
                  'Developmental Psychology',
                  'Brain Science',
                  'Cognitive Psychology',
                ]"
                :key="skill"
                class="skill-tag"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications Section -->
    </div>

    <!-- Image Preview Modal -->
    <div
      v-if="showImagePreview"
      class="image-preview-modal"
      @click.self="closeImagePreview"
    >
      <div class="modal-content">
        <button class="close-button" @click="closeImagePreview">&times;</button>
        <img :src="previewImageSrc" alt="Certificate Preview" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      showImagePreview: false,
      previewImageSrc: "",
      certifications: [
        {
          id: 6,
          title: "Fundamentals of NuxtJS",
          issuer: "Board Infinity",
          date: "January  2025",
          image: "/certifications/image (3).jpg",
          credentialUrl:
            "https://coursera.org/share/d3461033018e4f6c68679ef218e2d5b7",
          type: "Professional Certificate",
          status: "Completed",
        },

        {
          id: 4,
          title: "Introduction to Front-End Development",
          issuer: "Meta",
          date: "December 2023",
          image: "/certifications/image (4).jpg",
          credentialUrl:
            "https://coursera.org/share/bdfbaa5885e4bad6b7c73f98a53102a5",
          type: "Professional Certificate",
          status: "Completed",
        },

        {
          id: 3,
          title: "JavaScript for Web Development",
          issuer: "Board Infinity",
          date: "December 30, 2024",
          image: "/certifications/image (5).jpg",
          credentialUrl:
            "https://coursera.org/share/de338aa6629f9405eee60ede89148a9a",
          type: "Professional Certificate",
          status: "Completed",
        },

        {
          id: 5,
          title: "Open Source Software Development Methods",
          issuer: "The Linux Foundation",
          date: "February  2024",
          image: "/certifications/image (6).jpg",
          credentialUrl:
            "https://coursera.org/share/138ed2a412f6b47027d1003b50ff36e3",
          type: "Professional Certificate",
          status: "Completed",
        },
        {
          id: 1,
          title: "Foundations of Digital Marketing and E-commerce",
          issuer: "Google",
          date: "November 5, 2023",
          image: "/certifications/image (2).jpg",
          credentialUrl:
            "https://coursera.org/share/ec8509a2c9ceb1ce2e48965f5f7e287c",
          type: "Professional Certificate",
          status: "Completed",
        },
        {
          id: 2,
          title: "Attract and Engage Customers with Digital Marketing",
          issuer: "Google",
          date: "December 20, 2023",
          image: "/certifications/image (1).jpg",
          credentialUrl:
            "https://www.coursera.org/account/accomplishments/verify/QYCKPDP2WFJS",
          type: "Professional Certificate",
          status: "Completed",
        },
        {
          id: 7,
          title: "Critical Thinking for Better Decisions in the ChatGPT Era",
          issuer: "Deep Teaching Solutions",
          date: "Expected June 2025",
          image: "/certifications/pending.jpg",
          credentialUrl: "",
          type: "Professional Certificate",
          status: "In Progress",
        },
        {
          id: 8,
          title: "Prompt Engineering for ChatGPT",
          issuer: "Vanderbilt University",
          date: "Expected July 2025",
          image: "/certifications/pending.jpg",
          credentialUrl: "",
          type: "Professional Certificate",
          status: "In Progress",
        },
      ],
    };
  },
  methods: {
    openImagePreview(image) {
      this.previewImageSrc = image;
      this.showImagePreview = true;
    },
    closeImagePreview() {
      this.showImagePreview = false;
      this.previewImageSrc = "";
    },
  },
};
</script>

<style scoped>
.education-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  padding-top: 40px;
  text-align: left;
  margin-bottom: 40px;
}

.page-title h1 {
  font-size: 2.5rem;
  color: var(--text-primary);
}

.education-timeline {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.education-timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: #333;
}

.education-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0 30px 30px;
  position: relative;
  border: 1px solid #333;
  transition: all 0.3s ease;
  overflow: hidden;
}

.education-card::before {
  content: "";
  position: absolute;
  left: -35px;
  top: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #7c3aed;
  border: 3px solid #1a1a1a;
  z-index: 2;
}

.education-card::after {
  content: "";
  position: absolute;
  left: -30px;
  top: 26px;
  width: 30px;
  height: 2px;
  background: #dbd4d4;
  z-index: 1;
}

.education-card .timeline-title {
  position: relative;
  left: 0;
  margin-bottom: 25px;
  font-size: 1.5rem;
  color: #7c3aed;
  font-weight: 600;
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  padding-bottom: 8px;
  border-bottom: 3px solid #7c3aed;
  background: linear-gradient(90deg, #7c3aed 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.education-card .timeline-title::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #7c3aed 0%, #2563eb 100%);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.education-card:hover .timeline-title::after {
  transform: scaleX(1);
  transform-origin: left;
}

.education-card:hover {
  transform: translateX(10px);
  border-color: #7c3aed;
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.1);
}

.education-card:hover::before {
  background: #2563eb;
  box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
}

.education-card:hover::after {
  background: linear-gradient(90deg, #7c3aed, #2563eb);
}

.education-details {
  margin-bottom: 20px;
}

.education-details h3 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 10px;
}

.education-details h4 {
  font-size: 1.1rem;
  color: #e1e1e1;
  margin-bottom: 10px;
}

.graduation-date,
.specialization {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.skills-container {
  margin-top: 20px;
}

.skills-container h5 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 10px;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skills-tags span {
  background: #2d2d2d;
  color: #e1e1e1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.skills-tags span:hover {
  background: #3d3d3d;
  color: #fff;
  transform: translateY(-2px);
}

.certifications-section {
  margin: 4rem 0;
  padding: 2rem 0;
  border-bottom: 1px solid #333;
}

.certifications-section h2 {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.certifications-section h2::after {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 2px;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.certification-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.certification-card:hover {
  transform: translateY(-2px);
}

.cert-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cert-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cert-image:hover {
  transform: scale(1.02);
}

.cert-info {
  width: 100%;
  text-align: left;
}

.cert-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.cert-info h4 {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.cert-info p {
  font-size: 0.9rem;
  color: #718096;
}

.cert-links {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.credential-link {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.2s;
  font-weight: 500;
}

.credential-link:hover {
  background-color: #1d4ed8;
}

.image-preview-modal {
  padding-top: 200px;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 70%;
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
  height: auto;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #7c3aed;
}

.education-card.additional-learning {
  margin-top: 4rem;
  background: #1a1a1a;
  border: 1px solid #333;
  opacity: 0.9;
}

.education-card.additional-learning .timeline-title {
  color: #9ca3af;
}

.education-card.additional-learning::before {
  background: #4a5568;
}

.education-card.additional-learning::after {
  background: #4a5568;
}

.status-badge {
  display: inline-block;
  background: linear-gradient(90deg, #7c3aed 0%, #2563eb 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 8px;
}

.certification-card.in-progress {
  border: 2px solid #7c3aed;
  position: relative;
  overflow: hidden;
}

.certification-card.in-progress::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #7c3aed 0%, #2563eb 100%);
  animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.linkedin-button-container {
  text-align: center;
  margin-bottom: 40px;
}

.linkedin-cert-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(90deg, #0077b5 0%, #00a0dc 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 119, 181, 0.2);
}

.linkedin-cert-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 119, 181, 0.3);
  background: linear-gradient(90deg, #006396 0%, #0077b5 100%);
}

.linkedin-cert-button i {
  font-size: 1.3rem;
}

.linkedin-cert-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 119, 181, 0.2);
}

@media (max-width: 1024px) {
  .education-card .timeline-title {
    display: none;
  }
}

@media (max-width: 768px) {
  .education-timeline {
    padding: 10px;
  }

  .education-card {
    margin-left: 20px;
    padding: 20px;
  }

  .education-card::before {
    left: -26px;
    width: 10px;
    height: 10px;
  }

  .education-card::after {
    left: -20px;
    width: 20px;
  }

  .education-details h3 {
    font-size: 1.2rem;
  }

  .education-details h4 {
    font-size: 1rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  .cert-header {
    flex-direction: column;
  }

  .cert-image {
    width: 100%;
    height: 150px;
  }

  .cert-links {
    flex-direction: column;
  }

  .close-button {
    top: -30px;
    right: -10px;
  }
}
</style>
