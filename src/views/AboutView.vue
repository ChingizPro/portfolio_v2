<script setup lang="ts">
const skills = [
  { category: 'Frontend', items: ['Vue.js 3', 'React', 'TypeScript', 'HTML5', 'CSS3 / SCSS'] },
  { category: 'Tools', items: ['Vite', 'Webpack', 'Git', 'Figma'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum'] }
];

const experiences = [
  {
    period: "Feb 2025 – Present",
    role: "Frontend Developer & Instructor",
    company: "Kafolat Ta'lim Academy",
    location: "Termiz, Uzbekistan",
    bullets: [
      "Build and maintain the academy's web interfaces using Vue JS and React JS",
      "Design and deliver Frontend Development curriculum: Vue JS, React JS, JavaScript (ES6+), HTML5, CSS3, SCSS, Tailwind CSS",
      "Teach AI Prompt Engineering course — practical LLM usage and AI-assisted development workflows",
      "Create structured learning materials and mentor students through real-world project assignments"
    ]
  },
  {
    period: "Feb 2024 – Oct 2025",
    role: "IT Circle Lead (Instructor)",
    company: "Termiz Presidential School",
    location: "State Institution, Termiz, Uzbekistan",
    bullets: [
      "Led the school's official IT extracurricular program; taught HTML/CSS, JavaScript, and Python",
      "Designed project-based assignments to develop practical problem-solving and coding skills",
      "Provided technical assistance and maintained the school's IT equipment"
    ]
  },
  {
    period: "Apr 2021 – Mar 2024",
    role: "Frontend Developer",
    company: "Axborot Texnologiyalarini Rivojlantirish Markazi LLC",
    location: "IT Park Surxondaryo Branch, Termiz, Uzbekistan",
    bullets: [
      "Built and maintained web applications and information systems using Vue JS and React JS",
      "Developed responsive component-driven interfaces with SCSS and Bootstrap; managed code via Git/GitHub",
      "Conducted frontend development workshops (Vue JS, React JS, JavaScript) for trainees"
    ]
  },
  {
    period: "2019 – Present",
    role: "Freelance Frontend Developer & UI Designer",
    company: "Remote",
    location: "",
    bullets: [
      "Delivered custom websites and UI designs for local and international clients using Vue JS and React JS",
      "Specialized in responsive layouts, Sass/SCSS architecture, and interactive JavaScript UIs",
      "Managed full project lifecycle: requirements, design, implementation, and delivery"
    ]
  },
  {
    period: "2019 – 2020",
    role: "Contestant — Telegram Instant View Contest ★ International",
    company: "Telegram Messenger (Global Online Competition)",
    location: "",
    bullets: [
      "Competed in Telegram's global developer competition among thousands of international participants",
      "Achieved ranked placement earning monetary prize rewards",
      "Demonstrated mastery of Telegram's template markup and structured document parsing"
    ]
  }
];

const education = [
  {
    period: "2017 – 2021",
    role: "B.Sc. Software Engineering",
    company: "Tashkent University of Information Technologies (TUIT)",
    location: "Tashkent, Uzbekistan | Full-time",
    bullets: [
      "Specialization: Software Engineer (Dasturchi-muhandis)",
      "Core subjects: Algorithms & Data Structures, OOP, Databases, Computer Networks, Operating Systems"
    ]
  }
];

const languages = [
  { name: "Uzbek", proficiency: "Native", description: "" },
  { name: "English", proficiency: "Professional working proficiency", description: "reads, writes, and speaks fluently; comfortable in technical and business contexts" },
  { name: "Russian", proficiency: "Pre-intermediate", description: "full reading and listening comprehension; speaks with some mistakes" }
];
</script>

<template>
  <div class="about container">
    <div class="about__header" v-animate>
      <h1 class="about__title">About Me<span class="about__dot">.</span></h1>
    </div>
    
    <div class="about__content">
      <section class="about__bio" v-animate data-delay="100">
        <h2>Who I am</h2>
        <p>
          I am a passionate Frontend Developer dedicated to creating visually appealing and user-friendly web applications. With a strong foundation in modern JavaScript frameworks, particularly Vue 3 and React, I focus on writing clean, scalable, and maintainable code.
        </p>
        <p>
          My approach combines technical expertise with a keen eye for design, ensuring that every project I work on not only functions flawlessly but also provides an exceptional user experience.
        </p>
      </section>

      <section class="about__skills" v-animate data-delay="200">
        <h2>My Skills</h2>
        <div class="skills-grid">
          <div v-for="(group, index) in skills" :key="group.category" class="skill-group" v-animate :data-delay="index * 100">
            <h3 class="skill-group__title">{{ group.category }}</h3>
            <ul class="skill-group__list">
              <li v-for="skill in group.items" :key="skill" class="skill-group__item">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <section class="about__experience" v-animate>
      <h2>Experience</h2>
      <div class="timeline">
        <div v-for="(job, index) in experiences" :key="index" class="timeline-item" v-animate :data-delay="index * 100">
          <div class="timeline-item__period">{{ job.period }}</div>
          <div class="timeline-item__content">
            <h3 class="timeline-item__role">{{ job.role }}</h3>
            <p class="timeline-item__company">
              {{ job.company }} 
              <span v-if="job.location" class="timeline-item__location">&bull; {{ job.location }}</span>
            </p>
            <ul class="timeline-item__bullets">
              <li v-for="(bullet, bIndex) in job.bullets" :key="bIndex">{{ bullet }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="about__experience" v-animate>
      <h2>Education</h2>
      <div class="timeline">
        <div v-for="(edu, index) in education" :key="'edu-'+index" class="timeline-item" v-animate :data-delay="index * 100">
          <div class="timeline-item__period">{{ edu.period }}</div>
          <div class="timeline-item__content">
            <h3 class="timeline-item__role">{{ edu.role }}</h3>
            <p class="timeline-item__company">
              {{ edu.company }} 
              <span v-if="edu.location" class="timeline-item__location">&bull; {{ edu.location }}</span>
            </p>
            <ul class="timeline-item__bullets">
              <li v-for="(bullet, bIndex) in edu.bullets" :key="'edu-b-'+bIndex">{{ bullet }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="about__languages" v-animate>
      <h2>Languages</h2>
      <div class="languages-grid">
        <div v-for="(lang, index) in languages" :key="lang.name" class="language-card" v-animate :data-delay="index * 100">
          <h3 class="language-card__name">{{ lang.name }}</h3>
          <span class="language-card__proficiency">{{ lang.proficiency }}</span>
          <p v-if="lang.description" class="language-card__desc">{{ lang.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding-top: var(--spacing-xxl);
  padding-bottom: var(--spacing-xxl);
}

.about__header {
  margin-bottom: var(--spacing-xxl);
}

.about__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
}

.about__dot {
  color: var(--color-primary);
}

.about__content {
  display: grid;
  gap: var(--spacing-xxl);
}

@media (min-width: 768px) {
  .about__content {
    grid-template-columns: 1fr 1fr;
  }
}

.about__bio h2, .about__skills h2, .about__experience h2, .about__languages h2 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
}

.about__experience, .about__languages {
  margin-top: var(--spacing-xxl);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  border-left: 2px solid var(--color-border);
  padding-left: var(--spacing-lg);
  margin-left: var(--spacing-sm);
}

.timeline-item {
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: calc(var(--spacing-lg) * -1 - 6px);
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-bg);
}

.timeline-item__period {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.timeline-item__role {
  font-size: 1.125rem;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.timeline-item__company {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
}

.timeline-item__location {
  color: var(--color-text-secondary);
  opacity: 0.8;
}

.timeline-item__bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.timeline-item__bullets li {
  position: relative;
  padding-left: var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.timeline-item__bullets li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

.about__bio p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
}

.skills-grid {
  display: grid;
  gap: var(--spacing-lg);
}

.skill-group {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.skill-group:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  border-color: var(--color-primary);
}

.skill-group__title {
  font-size: 1.125rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

.skill-group__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.skill-group__item {
  background-color: var(--color-bg);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.languages-grid {
  display: grid;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .languages-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.language-card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  transition: all var(--transition-fast);
}

.language-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  border-color: var(--color-primary);
}

.language-card__name {
  font-size: 1.125rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.language-card__proficiency {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.language-card__desc {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}
</style>
