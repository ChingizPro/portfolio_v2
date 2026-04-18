import { ref, onMounted, watch } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  // Initialize theme from localStorage or system preference
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDark.value = prefersDark;
    }
    applyTheme(isDark.value);
  });

  // Watch for changes and save to localStorage
  watch(isDark, (newVal) => {
    applyTheme(newVal);
    localStorage.setItem('theme', newVal ? 'dark' : 'light');
  });

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleTheme,
  };
}
