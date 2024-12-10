class ThemeDropdown {

  private container: HTMLDivElement;

  private themes = [
    { name: "Dark", value: "dark" },
    { name: "Retro", value: "retro" },
    { name: "Dim", value: "dim" },
    { name: "Night", value: "night" },
    { name: "Light", value: "light" },
    { name: "Nord", value: "nord" },
    { name: "Dracula", value: "dracula" }
  ];

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'dropdown';
    this.render();
    this.initializeEvents();
  }

  private createDropdownButton(): string {
    return `
            <div tabindex="0" role="button" class="btn m-1">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    class="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
        `;
  }

  private createDropdownContent(): string {
    const themeItems = this.themes.map(theme => `
            <li>
                <input
                    type="radio"
                    name="theme-dropdown"
                    class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                    aria-label="${theme.name}"
                    value="${theme.value}"
                />
            </li>
        `).join('');

    return `
            <ul tabindex="0" class="dropdown-content -left-16 bg-base-300 rounded-box z-[1] w-40 p-2 shadow-2xl">
                ${themeItems}
            </ul>
        `;
  }

  private render(): void {
    this.container.innerHTML = `
            ${this.createDropdownButton()}
            ${this.createDropdownContent()}
        `;
  }

  private initializeEvents(): void {
    const themeInputs = this.container.querySelectorAll('.theme-controller');
    themeInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.checked) {
          document.documentElement.setAttribute('data-theme', target.value);
          localStorage.setItem('theme', target.value);
        }
      });
    });
  }

  // Méthode pour monter le composant dans le DOM
  public mount(element: HTMLElement): void {
    element.appendChild(this.container);
  }

  // Méthode pour initialiser le thème au chargement
  public initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') || 'default';
    const themeInput = this.container.querySelector(`input[value="${savedTheme}"]`) as HTMLInputElement;
    if (themeInput) {
      themeInput.checked = true;
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }
}

export default ThemeDropdown;