// Wait for the DOM to fully load before adding interactivity
document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsBtn = document.getElementById("toggle-skills-btn") as HTMLButtonElement;
    const skillsSection = document.querySelector(".skills") as HTMLElement;
  
    // Set initial state: Skills section should be visible
    let isSkillsVisible = true;
  
    // Add event listener for the toggle button
    toggleSkillsBtn.addEventListener("click", () => {
      isSkillsVisible = !isSkillsVisible;
      skillsSection.style.display = isSkillsVisible ? "block" : "none";
      toggleSkillsBtn.textContent = isSkillsVisible ? "Hide Skills Section" : "Show Skills Section";
    });
  });
  

