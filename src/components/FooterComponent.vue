<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Top Section -->
      <div class="footer-top">
        <div class="footer-logo">
          <h3>Malinga Bandara</h3>
          <!-- <p> | Software Engineer |<br>| AI & Prompt Engineering |<br>| Psychology Enthusiast |</p> -->
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Navigation</h4>
            <router-link to="/">Home</router-link>
            <router-link to="/experience">Experience</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/tech-stack">Tech Stack</router-link>
            <router-link to="/contacts">Contact</router-link>
          </div>

          <div class="link-group">
            <h4>Social</h4>
            <a
              href="https://github.com/zukoo52"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/malinga-bandara-670095145/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="malingasadharuwan@gmail.com">
              <i class="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="footer-bottom">
        <p class="copyright">
          {{ new Date().getFullYear() }} Malinga Bandara. All rights reserved.
        </p>
        <div class="tech-stack">
          <span>Built with</span>
          <i class="fab fa-vuejs" title="Vue.js"></i>

          <i class="fab fa-css" title="CSS"></i>
        </div>
      </div>
    </div>

    <!-- Neural Network Background -->
    <div class="neural-network-bg"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  position: relative;
  background: #0a0a0a;
  color: #fff;
  padding: 60px 0 30px;
  overflow: hidden;
}

.footer-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 2;
}

.neural-network-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(124, 58, 237, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(45, 212, 191, 0.1) 0%,
      transparent 50%
    );
  opacity: 0.5;
  z-index: 1;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #7c3aed, #2dd4bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-logo p {
  color: #aaa;
  font-size: 1rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.link-group h4 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #fff;
}

.link-group a {
  display: block;
  color: #aaa;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: #7c3aed;
}

.link-group i {
  margin-right: 8px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: #aaa;
  font-size: 0.9rem;
}

.tech-stack {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #aaa;
}

.tech-stack i {
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.tech-stack i:hover {
  color: #7c3aed;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
}
</style>
