<template>
  <div class="portfolio-overview">
    <div class="sidebar">
      <div
        class="sidebar-item"
        :class="{ active: activeTab === 'skills' }"
        @click="setActiveTab('skills')"
      >
        Skills
      </div>
      <div
        class="sidebar-item"
        :class="{ active: activeTab === 'experience' }"
        @click="setActiveTab('experience')"
      >
        Experience
      </div>
      <div
        class="sidebar-item"
        :class="{ active: activeTab === 'education' }"
        @click="setActiveTab('education')"
      >
        Education
      </div>
      <div
        class="sidebar-item"
        :class="{ active: activeTab === 'certifications' }"
        @click="setActiveTab('certifications')"
      >
        Certifications
      </div>
      <div
        class="sidebar-item"
        :class="{ active: activeTab === 'softSkills' }"
        @click="setActiveTab('softSkills')"
      >
        Soft Skills
      </div>
      <div
        class="sidebar-item"
        :class="{ active: activeTab === 'extracurricular' }"
        @click="setActiveTab('extracurricular')"
      >
        Extracurricular
      </div>
      <div
        class="sidebar-item"
        :class="{ active: activeTab === 'hobbies' }"
        @click="setActiveTab('hobbies')"
      >
        Hobbies
      </div>
    </div>

    <div class="content">
      <div v-if="activeTab === 'skills'" class="skills-content">
        <div v-for="(skill, index) in skills" :key="index" class="skill-card">
          <div class="skill-header">
            <h3>{{ skill.title }}</h3>
            <div class="skill-percentage">{{ skill.percentage }}%</div>
          </div>
          <div class="skill-progress-bar">
            <div class="progress-bar" :style="{ width: `${skill.percentage}%` }"></div>
          </div>
          <div class="skill-description">
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'experience'" class="experience-content">
        <div v-for="(item, index) in experience" :key="index" class="experience-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.company }}</p>
          <p>{{ item.duration }}</p>
        </div>
      </div>

      <div v-else-if="activeTab === 'education'" class="education-content">
        <div v-for="(item, index) in education" :key="index" class="education-card">
          <h3>{{ item.degree }}</h3>
          <p>{{ item.institution }}</p>
          <p>{{ item.graduationYear }}</p>
        </div>
      </div>

      <div v-else-if="activeTab === 'certifications'" class="certifications-content">
        <div v-for="(item, index) in certifications" :key="index" class="certification-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.issuer }}</p>
          <p>{{ item.year }}</p>
        </div>
        <button color="primary">More Details</button>
      </div>

      <div v-else-if="activeTab === 'softSkills'" class="soft-skills-content">
        <h2>Soft Skills</h2>
        <ul>
          <li v-for="(skill, index) in softSkills" :key="index">{{ skill }}</li>
        </ul>
      </div>

      <div v-else-if="activeTab === 'extracurricular'" class="extracurricular-content">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li v-for="(activity, index) in extracurricular" :key="index">{{ activity }}</li>
        </ul>
      </div>

      <div v-else-if="activeTab === 'hobbies'" class="hobbies-content">
        <h2>Hobbies</h2>
        <ul>
          <li v-for="(hobby, index) in hobbies" :key="index">{{ hobby }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioOverview',
  data() {
    return {
      activeTab: 'skills',
      skills: [
        { title: 'WordPress', percentage: 90, description: 'Expert in creating and customizing WordPress websites.' },
        { title: 'Vue.js', percentage: 85, description: 'Skilled in building interactive user interfaces using Vue.js.' },
        { title: 'Laravel', percentage: 80, description: 'Experience developing scalable back-end solutions.' },
      ],
      experience: [
        { title: 'Frontend Developer', company: 'ABC Inc.', duration: '2018 - Present' },
        { title: 'Intern Developer', company: 'XYZ Ltd.', duration: '2016 - 2017' },
      ],
      education: [
        { degree: 'BSc in Computer Science', institution: 'XYZ University', graduationYear: '2014' },
        { degree: 'MSc in Software Engineering', institution: 'ABC University', graduationYear: '2020' },
      ],
      certifications: [
        { title: 'AWS Certified Developer - Associate', issuer: 'Amazon Web Services', year: '2021' },
        { title: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', year: '2020' },
      ],
      softSkills: ['Teamwork', 'Adaptability', 'Eager to Learn', 'Critical Thinking', 'Time Management'],
      extracurricular: [
        'Vice Captain, University Boxing Team',
        'Member, University Wrestling Team',
        'Member, University Weightlifting Team',
      ],
      hobbies: ['Reading Books', 'Weightlifting', 'Boxing'],
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.portfolio-overview {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.sidebar {
  flex: 1;
  min-width: 200px;
  background-color: #1f2937;
  padding: 20px;
  border-radius: 8px;
}

.sidebar-item {
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.3s ease;
}

.sidebar-item.active,
.sidebar-item:hover {
  color: #d1d5db;
}

.content {
  flex: 3;
  background-color: #374151;
  padding: 20px;
  border-radius: 8px;
  min-width: 250px;
}

.skill-card, .experience-card, .education-card, .certification-card {
  background-color: #1f2937;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

h2 {
  color: #d1d5db;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  color: #9ca3af;
  font-size: 16px;
  margin-bottom: 10px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.skill-progress-bar {
  height: 8px;
  background-color: #4b5563;
  border-radius: 4px;
}

.progress-bar {
  height: 100%;
  background-color: #bf5a0d;
  transition: width 0.5s ease;
}

@media (max-width: 768px) {
  .portfolio-overview {
    flex-direction: column;
  }

  .sidebar {
    margin-bottom: 20px;
  }
}
</style>
