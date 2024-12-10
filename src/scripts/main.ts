import '../styles/style.css'
import ThemeDropdown from './components/ThemeDropdownComponent.ts'
import CodeManager from "./components/CodeManager.ts";

document.addEventListener('DOMContentLoaded', () : void => {
    const themeDropdown = new ThemeDropdown();
    new CodeManager();

    const themeSelectorContainer : HTMLElement | null = document.getElementById('theme-selector');
    if (themeSelectorContainer) {
        themeDropdown.mount(themeSelectorContainer)
        themeDropdown.initializeTheme();
    }
});
