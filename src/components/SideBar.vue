<template>
  <div class="sidebar">
    <!-- Profile Section -->
    <div class="profile">
      <img src="@/assets/me1.png" alt="Profile" class="profile-image" />
      <h2 class="name">Malinga Bandara</h2>
      <p class="role">Full-Stack Developer<br />Ui/UX Designer</p>
    </div>
<br>
    <!-- Basic Information -->
    <div class="info">
      <p><strong>Residence:</strong> Sri Lanka</p>
      <!-- <p><strong>City:</strong> Toronto</p> -->
      <p><strong>Age:</strong> 28</p>
    </div>

    <!-- Language Proficiency -->
    <div class="languages">
      <div v-for="lang in languages" :key="lang.name" class="language">
        <div class="circle">
          <span>{{ lang.percentage }}%</span>
        </div>
        <p>{{ lang.name }}</p>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="skills">
      <div v-for="skill in skills" :key="skill.name" class="skill">
        <p>{{ skill.name }}</p>
        <div class="progress">
          <div class="progress-bar" :style="{ width: skill.percentage + '%' }"></div>
        </div>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="social-links">
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-github"></i>
      <i class="fab fa-behance"></i>
      <i class="fab fa-twitter"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { name: "Sinhala", percentage: 100 },
        { name: "English", percentage: 85 },

      ],
      skills: [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 95 },
        { name: "JavaScript", percentage: 75 },
        { name: "PHP", percentage: 65 },
      ],
    };
  },
};
</script>

<style scoped>
/* Sidebar Container */
.sidebar {
  background-color: #1e1e2f;
  color: #fff;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  padding-top: 100px;
}

/* Profile Section */
.profile {
  text-align: center;
}
.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}
.name {
  font-size: 1.5rem;
  margin: 10px 0 5px;
}
.role {
  font-size: 0.9rem;
  color: #bdbdbd;
}

/* Basic Info Section */
.info p {
  text-align: center;
  margin: 5px 0;
  font-size: 0.9rem;
}

/* Language Section */
.languages {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.language {
  text-align: center;
}




/* Skills Section */
.skills .skill {
  margin-bottom: 10px;
}
.skills p {
  margin: 0;
}
.progress {
  background-color: #444;
  height: 5px;
  border-radius: 3px;
  margin-top: 5px;
}
.progress-bar {
  height: 100%;
  background-color: #ffcc00;
  border-radius: 3px;
}

/* Social Links Section */
.social-links {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-size: 1.5rem;
}
.social-links i {
  color: #ffcc00;
  cursor: pointer;
}
.social-links i:hover {
  color: #fff;
}
</style>
