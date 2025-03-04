<template>
  <div class="contact-page">
    <div class="page-title">
      <h1>Contact</h1>
    </div>

    <div class="contact-container">
      <!-- Contact Info Card -->
      <div class="contact-section">
        <div class="section-header">
          <i class="fas fa-id-card"></i>
          <h2>Contact Information</h2>
        </div>
        <div class="info-grid">
          <div class="info-card">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:malingabandara@gmail.com"
              >malingasadharuwan@gmail.com</a
            >
          </div>
          <div class="info-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <span> Sri Lanka</span>
          </div>
        </div>
      </div>

      <!-- Social Links Card -->
      <div class="contact-section">
        <div class="section-header">
          <i class="fas fa-share-alt"></i>
          <h2>Social Links</h2>
        </div>
        <div class="social-grid">
          <a
            href="https://github.com/zukoo52"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card"
          >
            <i class="fab fa-github"></i>
            <h3>GitHub</h3>
            <span>Follow my code</span>
          </a>
          <a
            href="https://www.linkedin.com/in/malinga-bandara-670095145/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-card"
          >
            <i class="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <span>Professional network</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-page {
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

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-section {
  margin-bottom: 60px;
  background: #1a1a1a;
  border-radius: 15px;
  padding: 30px;
  border: 1px solid #333;
  transition: transform 0.3s ease;
}

.contact-section:hover {
  transform: translateX(10px);
  border-color: #7c3aed;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.section-header i {
  font-size: 2rem;
  color: #7c3aed;
}

.section-header h2 {
  color: #fff;
  font-size: 1.8rem;
  margin: 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.info-card {
  background: #2d2d2d;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #333;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: #7c3aed;
  background: #333;
}

.info-card i {
  font-size: 2rem;
  color: #7c3aed;
  margin-bottom: 15px;
}

.info-card h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.info-card a,
.info-card span {
  color: #aaa;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.info-card a:hover {
  color: #7c3aed;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.social-card {
  background: #2d2d2d;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #333;
}

.social-card:hover {
  transform: translateY(-5px);
  border-color: #7c3aed;
  background: #333;
}

.social-card i {
  font-size: 2rem;
  color: #7c3aed;
  margin-bottom: 15px;
}

.social-card h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.social-card span {
  color: #aaa;
  font-size: 0.9rem;
  display: block;
}

@media (max-width: 768px) {
  .contact-page {
    padding: 100px 15px 60px;
  }

  .page-title h1 {
    font-size: 2rem;
  }

  .contact-section {
    padding: 20px;
    margin-bottom: 30px;
  }

  .section-header {
    margin-bottom: 20px;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .info-grid,
  .social-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .info-card,
  .social-card {
    padding: 20px;
  }
}
</style>
