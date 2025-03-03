<template>
  <transition name="fade-slide">
    <div class="card" v-if="isVisible">
      <h2 class="title">{{ title }}</h2>
      <ul class="list">
        <li v-for="(item, index) in details" :key="index">{{ item }}</li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  props: {
    title: String,
    details: Array,
  },
  setup() {
    const isVisible = ref(false);

    onMounted(() => {
      isVisible.value = true; // Trigger animation on mount
    });

    return { isVisible };
  },
});
</script>

<style scoped>
/* Animation */
.fade-slide-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Styling */
.card {
  background-color: #1f2937;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
.title {
  font-size: 1.2rem;
  color: #60a5fa;
}
.list {
  margin-top: 8px;
  color: #d1d5db;
}
</style>
