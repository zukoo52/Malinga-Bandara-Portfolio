<template>
  <div class="resume">
    <div class="details">
      <h3 class="site-topic">My Resume</h3>
      <h1 class="main-heading">Discover My Journey & Skills</h1>
      <p class="description">
        Explore all my personal and professional details. From my education to
        my experience, find everything you need to know to get to know me better.
      </p>
    </div>

    <div class="resume-download-section">
      <p class="download-description">
        Ready to dive into more details? Download my resume to learn about my
        experience, skills, and achievements in depth.
      </p>
      <button class="download-btn" @click="downloadCV">
        DOWNLOAD CV
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadCV() {
      // Replace 'path-to-your-cv.pdf' with the actual file path
      const link = document.createElement("a");
      link.href = "https://drive.google.com/uc?export=download&id=1wLmU5VYiov6G0ACmtcLOyTvVKuHaN2z3";
      link.download = "SEU_IS_15_ICT_070.pdf";
      link.click();
    },
  },
};
</script>

<style scoped>
/* Main Resume Container */
.resume {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c1c1c;
  color: #fff;
  padding: 50px 100px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
}

/* Details Section Styling */
.details {
  max-width: 50%;
}

.site-topic {
  font-size: 18px;
  color: #ffcc00;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: bold;
}

.main-heading {
  font-size: 36px;
  margin: 10px 0;
  line-height: 1.4;
}

.description {
  font-size: 16px;
  line-height: 1.8;
  margin-top: 15px;
  color: #d3d3d3;
}

/* Resume Download Section Styling */
.resume-download-section {
  max-width: 40%;
  text-align: center;
}

.download-description {
  font-size: 16px;
  color: #d3d3d3;
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Button Styling */
.download-btn {
  padding: 10px 20px;
  font-size: 16px;
  color: #121212;
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.download-btn:hover {
  background-color: #e6b800;
  transform: scale(1.05);
}
</style>
