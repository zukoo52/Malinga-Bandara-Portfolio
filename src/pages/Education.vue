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
          <h3>Bachelor Of Information Communication Technology (Hon's)</h3>
          <h4>South Eastern University of Sri Lanka</h4>
          <p class="graduation-date">Graduated: December 2023</p>
          <p class="specialization">Specialization: Software Technology</p>
          <div class="skills-container">
            <h5>Key Areas:</h5>
            <div class="skills-tags">
              <span v-for="skill in ['Computer Software Engineering', 'Mobile Applications', 'Web Applications', 'Cloud Computing', 'IoT']"
                    :key="skill"
                    class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Qualifications Section -->
      <div class="education-card">
        <h3 class="timeline-title">Additional Studies</h3>
        <div class="education-details">
          <h3>Diploma in Psychology and Counselling</h3>
          <h4>Ceylon Counselling & Psychology Research Center</h4>
          <p class="graduation-date">Completed: July 2022</p>
          <div class="skills-container">
            <h5>Areas of Study:</h5>
            <div class="skills-tags">
              <span v-for="skill in ['Counseling Psychology', 'Developmental Psychology', 'Brain Science', 'Cognitive Psychology']"
                    :key="skill"
                    class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications Section -->
      <div class="certifications-section">
        <h2>Professional Certifications</h2>
        <div class="certifications-grid">
          <div v-for="(cert, index) in certifications"
               :key="cert.id"
               class="education-card certification-card">
            <h3 class="timeline-title">{{ cert.type || 'Professional Certificate' }}</h3>
            <div class="cert-header">
              <img :src="cert.image"
                   :alt="cert.title"
                   @click="openImagePreview(cert.image)"
                   class="cert-image" />
              <div class="cert-info">
                <h3>{{ cert.title }}</h3>
                <h4>{{ cert.issuer }}</h4>
                <p>{{ cert.date }}</p>
              </div>
            </div>
            <p v-if="cert.credentialId" class="credential">Credential ID: {{ cert.credentialId }}</p>
            <div class="cert-links">
              <a v-if="cert.verifyUrl"
                 :href="cert.verifyUrl"
                 target="_blank"
                 rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i>
                Verify
              </a>
              <a v-if="cert.downloadUrl"
                 :href="cert.downloadUrl"
                 target="_blank"
                 rel="noopener noreferrer">
                <i class="fas fa-download"></i>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Preview Modal -->
    <div v-if="showImagePreview"
         class="image-preview-modal"
         @click.self="closeImagePreview">
      <div class="modal-content">
        <button class="close-button" @click="closeImagePreview">&times;</button>
        <img :src="previewImageSrc" alt="Certificate Preview">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      showImagePreview: false,
      previewImageSrc: '',
      certifications: [
        {
          id: 1,
          image: new URL('@/assets/certifications/01.jpg', import.meta.url).href,
          title: 'Fundamentals of NuxtJS',
          issuer: 'Board Infinity',
          date: 'January 2025',
          credentialId: 'X5K1CN25L7RC',
          skills: ['Nuxt.js', 'Vue.js', 'VueX', 'SSG', 'SSR', 'PWA'],
          certUrl: 'https://www.credential-url.com/nuxt',
          linkedinUrl: 'https://www.linkedin.com/in/your-profile'
        },
        {
          id: 2,
          image: new URL('@/assets/certifications/01.jpg', import.meta.url).href,
          title: 'Open Source Software Development Methods',
          issuer: 'The Linux Foundation',
          date: 'February 2024',
          skills: ['Open Source', 'GitHub', 'CI/CD', 'Version Control'],
          certUrl: 'https://www.credential-url.com/linux',
          linkedinUrl: 'https://www.linkedin.com/in/your-profile'
        },
        {
          id: 3,
          image: new URL('@/assets/certifications/01.jpg', import.meta.url).href,
          title: 'Introduction to Front-End Development',
          issuer: 'Meta',
          date: 'December 2023',
          skills: ['React.js', 'Bootstrap', 'JavaScript', 'SPA'],
          certUrl: 'https://www.credential-url.com/meta',
          linkedinUrl: 'https://www.linkedin.com/in/your-profile'
        }
      ]
    }
  },
  methods: {
    openImagePreview(image) {
      this.previewImageSrc = image;
      this.showImagePreview = true;
    },
    closeImagePreview() {
      this.showImagePreview = false;
      this.previewImageSrc = '';
    }
  }
}
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
  content: '';
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
  content: '';
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
  content: '';
  position: absolute;
  left: -30px;
  top: 26px;
  width: 30px;
  height: 2px;
  background: #333;
  z-index: 1;
}

.education-card .timeline-title {
  position: absolute;
  left: -200px;
  top: 15px;
  width: 150px;
  text-align: right;
  font-size: 1rem;
  color: #7c3aed;
  font-weight: 600;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
}

.education-card:hover .timeline-title {
  opacity: 1;
  transform: translateX(0);
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

.graduation-date, .specialization {
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
  margin-top: 60px;
}

.certifications-section h2 {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.certifications-section h2::after {
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

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.certification-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 25px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.certification-card:hover {
  transform: translateY(-5px);
  border-color: #7c3aed;
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.1);
}

.cert-header {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.cert-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.cert-image:hover {
  transform: scale(1.05);
}

.cert-header h3 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 5px;
}

.cert-header h4 {
  font-size: 1rem;
  color: #e1e1e1;
  margin-bottom: 5px;
}

.cert-header p {
  font-size: 0.9rem;
  color: #888;
}

.credential {
  color: #888;
  font-size: 0.9rem;
  margin: 10px 0;
}

.cert-links {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.cert-links a {
  color: #7c3aed;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
}

.cert-links a:hover {
  color: #2563eb;
}

.cert-links i {
  font-size: 1.1rem;
}

.image-preview-modal {
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
