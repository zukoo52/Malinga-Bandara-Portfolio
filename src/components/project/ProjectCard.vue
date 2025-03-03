<template>
  <div class="project-card" @click="showProjectDetails" :data-type="project.type">
    <img :src="project.image" alt="Project Image" class="project-image" />
    <div class="card-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="tech-stack">
        <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
      </div>
      <div class="buttons">
        <a :href="project.githubLink" target="_blank">View Code</a>
        <!-- <a :href="project.detailsLink" target="_blank">More Details</a> -->
        <a :href="project.figmaLink" target="_blank">Figma File</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  methods: {
    showProjectDetails() {
      this.$emit("open-modal", this.project);
    },
  },
};
</script>

<style scoped>
.project-card {
  background: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #333;
  position: relative;
  z-index: 1;
}

.project-card::before {
  content: '';
  position: absolute;
  right: -35px;
  top: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #7c3aed;
  border: 3px solid #1a1a1a;
  z-index: 2;
}

.project-card:nth-child(even)::before {
  right: auto;
  left: -35px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.card-content {
  padding: 25px;
}

.card-content h3 {
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
}

.card-content p {
  color: #aaa;
  font-size: 0.95rem;
  margin-bottom: 15px;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.tech-stack span {
  background: #2d2d2d;
  color: #e1e1e1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.tech-stack span:hover {
  background: #3d3d3d;
  transform: translateY(-2px);
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin-top: 20px;
}

.buttons a {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 0.9rem;
  text-decoration: none;
  color: white;
  border-radius: 20px;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

/* Color coding for different project types */
.project-card[data-type="fullstack"] {
  border-color: #7c3aed;
}

.project-card[data-type="fullstack"]::before {
  background: #7c3aed;
}

.project-card[data-type="frontend"] {
  border-color: #2563eb;
}

.project-card[data-type="frontend"]::before {
  background: #2563eb;
}

.project-card[data-type="backend"] {
  border-color: #16a34a;
}

.project-card[data-type="backend"]::before {
  background: #16a34a;
}

.buttons a:first-child {
  background: #2563eb;
}

.buttons a:nth-child(2) {
  background: #7c3aed;
}

.buttons a:last-child {
  background: #16a34a;
}

.buttons a:hover {
  transform: translateY(-2px);
  opacity: 0.9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .project-card::before {
    left: -25px;
    right: auto;
  }

  .project-card:nth-child(even)::before {
    left: -25px;
  }

  .card-content {
    padding: 20px;
  }

  .buttons {
    flex-wrap: wrap;
  }

  .buttons a {
    flex: 1;
    text-align: center;
    justify-content: center;
    min-width: 120px;
  }
}
</style>
