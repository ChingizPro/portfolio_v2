<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'outline';
  to?: string;
  href?: string;
}>();
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="['button', `button--${variant || 'primary'}`]">
    <slot />
  </RouterLink>
  <a v-else-if="href" :href="href" target="_blank" rel="noopener noreferrer" :class="['button', `button--${variant || 'primary'}`]">
    <slot />
  </a>
  <button v-else :class="['button', `button--${variant || 'primary'}`]">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-xl);
  font-size: 1rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  border: 2px solid transparent;
  outline: none;
  font-family: var(--font-family-sans);
}

.button--primary {
  background-color: var(--color-primary);
  color: white;
  border: 1px solid transparent;
}

.button--primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.button--outline {
  background-color: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.button--outline:hover {
  background-color: var(--color-primary);
  color: white;
}

[data-theme="dark"] .button--primary {
  color: var(--color-bg);
}
</style>
