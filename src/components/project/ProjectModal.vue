<template>
  <div v-if="project" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <span class="close-btn" @click="closeModal">&times;</span>
      <h2>{{ project.title }}</h2>
      <div class="image-slider">
        <img v-for="(img, index) in project.images" :key="index" :src="img" alt="Project Screenshot" />
      </div>
      <p>{{ project.fullDescription }}</p>
      
      <h3>My Tasks</h3>
      <div class="my-tasks">
        <div v-for="task in project.myTasks" :key="task.title" class="task-item">
          <div class="task-header">
            <h4>{{ task.title }}</h4>
            <span :class="['task-status', task.status]">{{ task.status }}</span>
          </div>
          <p>{{ task.description }}</p>
        </div>
      </div>

      <h3>Tasks Completed:</h3>
      <ul>
        <li v-for="task in project.tasks" :key="task">{{ task }}</li>
      </ul>
      <h3>Technologies Used:</h3>
      <div class="tech-stack">
        <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
      </div>
      <div class="buttons">
        <a :href="project.githubLink" target="_blank">View Code</a>
        <a :href="project.detailsLink" target="_blank">More Details</a>
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
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: #1a1a1a;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid #333;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  transition: color 0.2s ease;
}

.close-btn:hover {
  color: #fff;
}

.modal-content h2 {
  margin: 0 0 20px 0;
  font-size: 2rem;
  color: #fff;
}

.image-slider {
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
}

.image-slider img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-content p {
  color: #aaa;
  line-height: 1.6;
  margin: 20px 0;
  font-size: 1rem;
}

.modal-content h3 {
  color: #fff;
  margin: 25px 0 15px 0;
  font-size: 1.3rem;
}

.modal-content ul {
  list-style-type: none;
  padding: 0;
  margin: 15px 0;
}

.modal-content li {
  color: #aaa;
  margin: 8px 0;
  padding-left: 20px;
  position: relative;
}

.modal-content li::before {
  content: "•";
  color: #666;
  position: absolute;
  left: 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
  justify-content: center;
}

.tech-stack span {
  background: #2d2d2d;
  color: #e1e1e1;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.tech-stack span:hover {
  background: #3d3d3d;
  transform: translateY(-2px);
}

.buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
}

.buttons a {
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.95rem;
  text-decoration: none;
  color: white;
  border-radius: 25px;
  transition: all 0.2s ease;
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

.my-tasks {
  margin: 20px 0;
}

.task-item {
  background: #2d2d2d;
  border-radius: 12px;
  padding: 15px;
  margin: 10px 0;
  text-align: left;
  transition: transform 0.2s ease;
}

.task-item:hover {
  transform: translateY(-2px);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.task-header h4 {
  margin: 0;
  color: #fff;
  font-size: 1.1rem;
}

.task-status {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  text-transform: capitalize;
}

.task-status.completed {
  background: #16a34a;
  color: #fff;
}

.task-status.in-progress {
  background: #eab308;
  color: #000;
}

.task-status.pending {
  background: #dc2626;
  color: #fff;
}

.task-item p {
  margin: 0;
  font-size: 0.9rem;
  color: #aaa;
}
</style>
