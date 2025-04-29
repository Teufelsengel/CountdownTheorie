//Toggle Element
export default function ToggleElement(elementName) {
    const toggleElement = document.getElementById(elementName);
    const currentDisplay = getComputedStyle(toggleElement).display;

    if (currentDisplay === "none") {
        toggleElement.style.display = "block";
    } else {
        toggleElement.style.display = "none";
    }
};