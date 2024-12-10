class CodeManager {
    private elements: Element[] = [];
    private currentIndex : number = 0;
    private isInitialized: boolean = false;

    constructor() {
        this.attachEvents();
    }

    private handleButtonCode = () : void => {  // Utilisation d'une fonction fléchée
        const codeContainer = document.getElementById("code-container");
        if (!codeContainer) return;

        this.elements = Array.from(codeContainer.children);

        if (!this.isInitialized) {
            this.initHighlight();
            this.isInitialized = true;
        }
    }

    private attachEvents() : void  {
        const button: HTMLElement | null = document.getElementById('code-button');
        if (button) {
            button.addEventListener('click', this.handleButtonCode);
        }
    }

    private initHighlight() {
        if (this.elements.length === 0) return;
        this.elements[0].classList.add('bg-base-200');
        this.createMovingElement(this.elements[0])
        this.moveLineToPosition(this.elements[0])
        document.addEventListener('click', this.moveHighlight)
    }

    private moveHighlight = () : void => {
        if (this.elements.length === 0) return;

        this.elements[this.currentIndex].classList.remove('bg-base-200');
        this.currentIndex = (this.currentIndex + 1) % this.elements.length;
        this.elements[this.currentIndex].classList.add('bg-base-200');
    }

    private createMovingElement(lineOfCode: Element): void {
        console.log(lineOfCode);
    }

    private moveLineToPosition(lineOfCode: Element): void  {
        console.log(lineOfCode);
    }
}

export default CodeManager;
