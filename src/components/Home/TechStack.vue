<template>
  <div class="main">
    <!-- Title -->
    <div class="tech-stack-section">
      <h1 class="title">My Tech Stack</h1>
      <p class="subtitle">Technologies I frequently use</p>

      <!-- Highlighted Technologies -->
      <div class="tech-highlight">
        <div class="tech-item">
          <img src="@/assets/techstacks/StackImage (3).png" alt="PHP" class="tech-icon" />
          <p class="tech-name">PHP</p>
        </div>
        <div class="tech-item">
          <img src="@/assets/techstacks/StackImage (14).png" alt="Laravel" class="tech-icon" />
          <p class="tech-name">Laravel</p>
        </div>
        <div class="tech-item">
          <img src="@/assets/techstacks/StackImage (2).png" alt="Vue.js" class="tech-icon" />
          <p class="tech-name">Vue.js</p>
        </div>
        <div class="tech-item">
          <img src="@/assets/techstacks/StackImage (8).png" alt="React" class="tech-icon" />
          <p class="tech-name">React</p>
        </div>
        <div class="tech-item">
          <img src="@/assets/techstacks/StackImage (6).png" alt="Bootstrap" class="tech-icon" />
          <p class="tech-name">Bootstrap</p>
        </div>
        <div class="tech-item">
          <img src="@/assets/techstacks/StackImage (7).png" alt="Git" class="tech-icon" />
          <p class="tech-name">Git</p>
        </div>

      </div>

      <!-- View More Button -->
      <div class="view-more">
        <v-btn  class="view-more-button" @click="$router.push('/Technologies')" elevation="2">
          View Full Tech Stack
        </v-btn>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechStack",
};
</script>

<style scoped>
/* General Section */


.tech-stack-section {
  text-align: center;
  background-color: #223B4B;
  color: #ffffff;
  padding: 40px;
  font-family: 'Arial', sans-serif;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.8rem;
  margin-bottom: 40px;
  color: #b0b0b0;
}

/* Highlighted Technologies */
.tech-highlight {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

}

.tech-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
}

.tech-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.tech-name {
  font-size: 14px;
  color: #ffffff;
}

/* View More Button */
.view-more {
  margin-top: 40px;
}

.view-more-button {
  background-color: #ffcc00;
  color: #000;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
}
</style>
``
