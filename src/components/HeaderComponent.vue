<template>
  <header :class="{ 'scrolled': hasScrolled, 'mobile-open': isMobileMenuOpen }">
    <nav class="nav-container">
      <router-link to="/" class="logo">
        <span class="logo-text">MB</span>
      </router-link>

      <!-- Desktop Menu -->
      <div class="nav-links" :class="{ 'show': isMobileMenuOpen }">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="nav-link"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>

      <!-- Social Links -->
      <div class="social-links" :class="{ 'show': isMobileMenuOpen }">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your.email@example.com">
          <i class="fas fa-envelope"></i>
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      hasScrolled: false,
      isMobileMenuOpen: false,
      menuItems: [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Education', path: '/education' },
        { name: 'Tech Stack', path: '/tech-stack' },
        { name: 'Contact', path: '/contacts' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.hasScrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : ''
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: transparent;
  padding: 20px 0;
}

header.scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  z-index: 100;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(45deg, #7c3aed, #2dd4bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #7c3aed, #2dd4bf);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  color: #fff;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-3px);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
}

.mobile-toggle span {
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links,
  .social-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    padding: 20px;
  }

  .nav-links {
    padding-top: 80px;
  }

  .social-links {
    top: 60%;
  }

  .nav-links.show,
  .social-links.show {
    transform: translateX(0);
  }

  .mobile-open .mobile-toggle span:nth-child(1) {
    transform: translateY(9.5px) rotate(45deg);
  }

  .mobile-open .mobile-toggle span:nth-child(2) {
    opacity: 0;
  }

  .mobile-open .mobile-toggle span:nth-child(3) {
    transform: translateY(-9.5px) rotate(-45deg);
  }
}
</style>
