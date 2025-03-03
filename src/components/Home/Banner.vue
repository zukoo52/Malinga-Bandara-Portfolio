<template>
  <div class="main">
  <section class="banner">
    <div class="banner-overlay">
      <h1 class="banner-heading">Explore My Digital Playground!</h1>
      <p class="banner-code">
        <span>&lt;code&gt;</span>
        {{ currentCode }}
        <span>&lt;/code&gt;</span>
      </p>
      <br>

      <button class="banner-btn" @click="$router.push('/about')">Explore Now</button>
    </div>
    <img class="developer-image" src="@/assets/me.png" alt="Developer">
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      codeSnippets: [
        "I build design Mockups.",
        "I develop Frontends.",
        "I create Backends.",
        "I love Full-Stack Development.",
      ],
      currentCode: "I build design Mockups.",
      currentIndex: 0,
    };
  },
  mounted() {
    this.animateCodeSnippets();
  },
  methods: {
    animateCodeSnippets() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.codeSnippets.length;
        this.currentCode = this.codeSnippets[this.currentIndex];
      }, 3000);
    },
  },
};
</script>

<style scoped>
.main{
  background-color: #ffaa00;
}
.banner {
  position: relative;
  width: 100%;
  height: 450px;
  background: url('@/assets/bg.png') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 5%;
  padding-bottom: -250px;
}

.banner-overlay {
  margin-left: 100px;
  max-width: 50%;
}

.banner-heading {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.banner-code {
  font-size: 1.5rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

.banner-code span {
  color: #ffcc00;
}

.banner-btn {
  background-color: #ffcc00;
  color: #000;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.banner-btn:hover {
  background-color: #ffaa00;
}

.developer-image {
 margin-top: 90px;
 margin-right: 100px;
  height: 80%;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
</style>
