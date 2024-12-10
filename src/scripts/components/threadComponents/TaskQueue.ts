import { animate } from "motion"

const svg = document.getElementById("event-icon")
if (svg) {
    animate(
        svg,
        { rotate: 90 },
        { type: "spring", repeat: Infinity, repeatDelay: 0.2 }
    );
}