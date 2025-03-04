<template>
  <section class="resume-section">
    <div class="resume-content">
      <div class="resume-info">
        <span class="section-subtitle">MY RESUME</span>
        <h2 class="section-title">A Snapshot of My Professional Journey</h2>
        <p class="section-description">
          Explore my journey as a full-stack developer, where I specialize in
          building scalable web applications and user-friendly interfaces. With
          hands-on experience in Laravel, Vue.js, and modern web technologies,
          I’m dedicated to delivering high-quality solutions. Check out my
          latest projects, certifications, and work experience. Download my CV
          to get a complete overview of my skills and achievements.
        </p>
        <div class="resume-stats">
          <div class="stat-item">
            <i class="fas fa-code"></i>
            <div class="stat-details">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div class="stat-item">
            <i class="fas fa-certificate"></i>
            <div class="stat-details">
              <h3>6+</h3>
              <p>Certifications</p>
            </div>
          </div>
          <div class="stat-item">
            <i class="fas fa-briefcase"></i>
            <div class="stat-details">
              <h3>1 Year</h3>
              <p>Work Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div class="resume-actions">
        <div class="resume-preview">
          <img
            src="/public/Projects/Resume snap.png"
            alt="Resume Preview"
            class="preview-image"
          />
          <div class="preview-overlay">
            <p>Last Updated: March 2025</p>
          </div>
        </div>
        <button class="download-btn" @click="downloadCV">
          <i class="fas fa-download"></i>
          Download Full Resume
        </button>
        <p class="file-info">PDF Format • Less than 1MB</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    downloadCV() {
      const link = document.createElement("a");
      link.href =
      "https://drive.google.com/uc?export=download&id=11b94U58A7kXVbIr1ZsCytBqNfLjG7hkX"; // Use the download link format
      link.download = "M.S Bandara.pdf";
      link.click();
    },
  },
};
</script>

<style scoped>
.resume-section {
  padding: 5rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.05) 0%,
    rgba(37, 99, 235, 0.05) 100%
  );
  border-radius: 20px;
  margin: 2rem 0;
}

.resume-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.resume-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-subtitle {
  color: #7c3aed;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 2px;
}

.section-title {
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0.5rem 0;
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}

.resume-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(124, 58, 237, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(124, 58, 237, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-3px);
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.1);
}

.stat-item i {
  font-size: 1.5rem;
  color: #7c3aed;
}

.stat-details h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;
}

.stat-details p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
}

.resume-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.resume-preview {
  position: relative;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.preview-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

.preview-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  font-size: 0.9rem;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.2);
}

.download-btn i {
  font-size: 1.2em;
}

.file-info {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .resume-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .resume-info {
    align-items: center;
  }

  .resume-stats {
    justify-content: center;
  }

  .stat-item {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .resume-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .resume-stats {
    grid-template-columns: 1fr;
  }
}
</style>
