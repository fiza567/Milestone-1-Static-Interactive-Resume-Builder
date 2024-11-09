// Wait for the DOM to fully load before adding interactivity
document.addEventListener("DOMContentLoaded", function () {
    var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
    var skillsSection = document.querySelector(".skills");
    // Set initial state: Skills section should be visible
    var isSkillsVisible = true;
    // Add event listener for the toggle button
    toggleSkillsBtn.addEventListener("click", function () {
        isSkillsVisible = !isSkillsVisible;
        skillsSection.style.display = isSkillsVisible ? "block" : "none";
        toggleSkillsBtn.textContent = isSkillsVisible ? "Hide Skills Section" : "Show Skills Section";
    });
});
