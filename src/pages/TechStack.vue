<template>
  <div class="tech-stack">
    <div class="page-title">
      <h1>Tech Stack</h1>
    </div>
    <div class="page-content">
      <div class="tech-categories">
        <div v-for="(category, index) in categories"
             :key="category.name"
             class="tech-category"
             :class="{ 'active': activeCategory === index }"
             @mouseenter="activeCategory = index"
             @mouseleave="activeCategory = null">
          <div class="category-header">
            <i :class="category.icon"></i>
            <h3>{{ category.name }}</h3>
          </div>
          <div class="tech-grid">
            <div v-for="skill in category.skills"
                 :key="skill.name"
                 class="tech-item"
                 :style="{ '--progress': skill.proficiency + '%' }">
              <div class="tech-icon">
                <img :src="skill.icon" :alt="skill.name">
              </div>
              <div class="tech-name">{{ skill.name }}</div>
              <div class="proficiency">
                <div class="proficiency-level" :style="{ width: `var(--progress)` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


     <h1 class="AdditionalSkills">Additional Non-Tech Skills</h1>

      <!-- 🧠 Problem-Solving & Cognitive Skills Section -->

      <div class="current-focus">
        <h2>🧠 Problem-Solving & Cognitive Skills</h2>
        <div class="focus-grid">
          <div v-for="focus in currentFocus"
               :key="focus.area"
               class="focus-card">
            <i :class="focus.icon"></i>
            <h3>{{ focus.area }}</h3>
            <p>{{ focus.description }}</p>
          </div>
        </div>
      </div>


<!--  Software & Project Management Section -->

      <div class="current-focus">
        <h2>🗂️ Software & Project Management</h2>
        <div class="focus-grid">
          <div v-for="focus in ProjectManagement"
               :key="focus.area"
               class="focus-card">
            <i :class="focus.icon"></i>
            <h3>{{ focus.area }}</h3>
            <p>{{ focus.description }}</p>
          </div>
        </div>
      </div>

<!--  AI-Driven Content & Automation Section -->

      <div class="current-focus">
        <h2>🤖 AI-Driven Content & Automation</h2>
        <div class="focus-grid">
          <div v-for="focus in AIDriven"
               :key="focus.area"
               class="focus-card">
            <i :class="focus.icon"></i>
            <h3>{{ focus.area }}</h3>
            <p>{{ focus.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechStack',
  data() {
    return {
      activeCategory: null,
      categories: [
        {
          name: 'Frontend Development',
          icon: 'fas fa-laptop-code',
          skills: [
          {
              name: 'Nuxt.js',
              icon: '/techstacks/nuxt.png',

            },
            {
              name: 'Vue.js',
              icon: '/techstacks/StackImage (2).png',

            },
            {
              name: 'React',
              icon: '/techstacks/StackImage (8).png',

            },


            {
              name: 'SCSS',
              icon: '/techstacks/StackImage (9).png',

            },
            {
              name: 'Boostrap',
              icon: '/techstacks/StackImage (6).png',

            },
            {
              name: 'Html/Css/Js',
              icon: '/techstacks/StackImage (12).png',

            },

          ]
        },
        {
          name: 'Backend Development',
          icon: 'fa-solid fa-code',
          skills: [

            {
              name: 'Laravel',
              icon: '/techstacks/StackImage (14).png',

            },
            {
              name: 'MySQL',
              icon: '/techstacks/Image (2).png',

            },
            {
              name: 'MongoDB',
              icon: '/techstacks/image (6).png',

            }
          ]
        },{
          name: 'Tools',
          icon: 'fa-solid fa-gear',
          skills: [

            {
              name: 'Git',
              icon: '/techstacks/StackImage (7).png',

            },
            {
              name: 'GitHub',
              icon: '/techstacks/StackImage (5).png',

            },{
              name: 'Docker',
              icon: '/techstacks/Image (5).png',

            },{
              name: 'VSCode',
              icon: '/techstacks/StackImage (13).png',

            },{
              name: 'Postman',
              icon: '/techstacks/postman.png',

            },
            {
              name: 'Figma',
              icon: '/techstacks/image.png',

            },
            {
              name: 'Wordpress',
              icon: '/techstacks/image (7).png',

            },
            {
              name: 'Fedora Linux',
              icon: '/techstacks/Image (4).png',

            },
            {
              name: 'Jira',
              icon: '/techstacks/Image (1).png',

            }
          ]
        },
        // {
        //   name: 'UI/UX & Psychology',
        //   icon: 'fas fa-brain',
        //   skills: [
        //     {
        //       name: 'Figma',
        //       icon: '/icons/figma.svg',
        //       proficiency: 85
        //     },
        //     {
        //       name: 'User Research',
        //       icon: '/icons/research.svg',
        //       proficiency: 90
        //     },
        //     {
        //       name: 'Cognitive Psychology',
        //       icon: '/icons/psychology.svg',
        //       proficiency: 85
        //     },
        //     {
        //       name: 'UX Writing',
        //       icon: '/icons/writing.svg',
        //       proficiency: 80
        //     }
        //   ]
        // }
      ],
      // learningJourney: [
      //   {
      //     year: '2024',
      //     achievement: 'Mastered Advanced Vue.js Concepts & UI Psychology Integration',
      //     technologies: ['Vue.js', 'UX Psychology', 'Advanced Animations']
      //   },
      //   {
      //     year: '2023',
      //     achievement: 'Full Stack Development & Research Work',
      //     technologies: ['Laravel', 'Node.js', 'Cognitive Psychology']
      //   },
      //   {
      //     year: '2022',
      //     achievement: 'Started Web Development Journey',
      //     technologies: ['HTML/CSS', 'JavaScript', 'Basic UI/UX']
      //   }
      // ],


      //AIDriven
      AIDriven: [
        {
          area: '  Optimized AI Prompting',
          icon: 'fa-solid fa-keyboard',
          description: ' Crafting precise prompts for tools like ChatGPT, Claude, and other AI models.',

        },

        {
          area: ' AI-Assisted Research & Ideation',
          icon: 'fa-solid fa-robot',
          description: 'Using AI for brainstorming, troubleshooting, and solution design.',

        },
        {
          area: ' Strategic AI Implementation',
          icon: 'fa-solid fa-gears',
          description: 'Leveraging AI tools to enhance productivity and automate repetitive tasks.',

        }
      ],

      ProjectManagement: [
        {
          area: '   Agile & Task Prioritization',
          icon: 'fa-solid fa-tasks',
          description: 'Structuring development tasks for efficiency and collaboration.',
        },

        {
          area: '  Code Review & Debugging Mindset',
          icon: 'fa-solid fa-code-branch',
          description: ' Identifying and resolving issues systematically, both manually and with AI-assisted insights.',

        },
        {
          area: ' Version Control & Documentation',
          icon: 'fa-solid fa-book',
          description: '  Maintaining project clarity using Git, GitHub, and structured documentation.',

        }
      ],

      currentFocus: [
        {
          area: ' Analytical Thinking',
          icon: 'fa-solid fa-brain',
          description: 'Breaking down complex problems into structured, efficient solutions.',

        },
        {
          area: 'Decision-Making Under Constraints',
          icon: 'fa-solid fa-lightbulb',
          description: ' Prioritizing tasks and optimizing development workflows.',

        },
        {
          area: 'Cognitive Efficiency & Focus',
          icon: 'fa-solid fa-user-clock',
          description: ' Applying psychology-based techniques for deep work and high productivity.',

        }
      ]
    }
  }
}
</script>

<style scoped>
.tech-stack {
  padding: 120px 20px 80px;
  min-height: 100vh;
  background-color: #0a0a0a;
}

.page-title {
  text-align: center;
  margin-bottom: 60px;
  padding: 0 20px;
}

.page-title h1 {
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 600;
  position: relative;
  display: inline-block;
}
.AdditionalSkills{
  text-align: center;
  font-size: 40px;
  padding-top: 20px;
  color: #2563eb;
}
.page-title h1::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 2px;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
}

.tech-categories {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.tech-categories::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2px;
  background: #333;
}

.tech-category {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0 30px 30px;
  position: relative;
  border: 1px solid #333;
  transition: all 0.3s ease;
  overflow: hidden;
}

.tech-category::before {
  content: '';
  position: absolute;
  left: -35px;
  top: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #7c3aed;
  border: 3px solid #1a1a1a;
  z-index: 2;
}

.tech-category::after {
  content: '';
  position: absolute;
  left: -30px;
  top: 26px;
  width: 30px;
  height: 2px;
  background: #333;
  z-index: 1;
}

.tech-category:hover {
  transform: translateX(10px);
  border-color: #7c3aed;
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.1);
}

.tech-category:hover::before {
  background: #2563eb;
  box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
}

.tech-category:hover::after {
  background: linear-gradient(90deg, #7c3aed, #2563eb);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 25px;
}

.tech-item {
  background: #2d2d2d;
  border-radius: 12px;
  padding: 20px 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #333;
  position: relative;
  overflow: hidden;
}

.tech-item::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #2563eb, #7c3aed);
  border-radius: 14px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-item:hover::before {
  opacity: 1;
}

.tech-item:hover {
  transform: translateY(-5px) scale(1.02);
  background: #3d3d3d;
}

.tech-icon {

  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.tech-item:hover .tech-icon {
  transform: scale(1.1);
}

.tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(124, 58, 237, 0.3));
}

.tech-name {
  font-size: 0.9rem;
  color: #e1e1e1;
  margin: 0;
  font-weight: 500;
  transition: color 0.3s ease;
}

.tech-item:hover .tech-name {
  color: #fff;
}

.proficiency {
  margin-top: 12px;
  height: 4px;
  background: #333;
  border-radius: 2px;
  overflow: hidden;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.proficiency-level {
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 2px;
  transition: width 0.6s ease;
}

.tech-item:hover .proficiency {
  opacity: 1;

}

.learning-journey {
  margin: 4rem 0;
}

.learning-journey h2 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

.timeline {
  display: grid;
  gap: 2rem;
}

.milestone {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding: 1.5rem;
  background: #1a1a1a;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.year {
  font-size: 1.5rem;
  color: #7c3aed;
  font-weight: bold;
  padding: 0.5rem 1rem;
  background: #2d2d2d;
  border-radius: 8px;
  text-align: center;
}

.achievement h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-tag {
  padding: 0.4rem 0.8rem;
  background: #333;
  color: #e1e1e1;
  border-radius: 20px;
  font-size: 0.9rem;
}

.current-focus {
  margin-top: 4rem;
}

.current-focus h2 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.focus-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.focus-card:hover {
  transform: translateY(-5px);
}

.focus-card i {
  font-size: 2.5rem;
  color: #7c3aed;
  margin-bottom: 1rem;
}

.focus-card h3 {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 1rem;
}

.focus-card p {
  color: #e1e1e1;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.resources {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.resources a {
  color: #7c3aed;
  text-decoration: none;
  transition: color 0.3s ease;
}

.resources a:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .tech-stack {
    padding: 100px 15px 60px;
  }

  .page-title h1 {
    font-size: 2rem;
  }

  .tech-category {
    padding: 20px;
    margin: 20px 0;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
  }

  .tech-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  .tech-item {
    padding: 15px 10px;
  }

  .category-header i {
    font-size: 1.6rem;
  }

  .category-header h3 {
    font-size: 1.2rem;
  }
}
</style>
