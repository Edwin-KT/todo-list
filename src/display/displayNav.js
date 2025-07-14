import menuIcon from "../media/icons/nav/menu-icon.svg";

function createNavToggleBtn() {
  const navToggleBtn = document.createElement("button");
  const navToggleImg = new Image();
  navToggleImg.src = menuIcon;
  navToggleImg.alt = "Toggle Menu";
  navToggleBtn.id = "nav-toggle-btn";
  navToggleBtn.append(navToggleImg);
  return navToggleBtn;
}

function hideNav() {
  const navContainer = document.getElementById("side-nav");
  const navToggleBtn = createNavToggleBtn();
  navToggleBtn.style.position = "absolute";
  navContainer.innerHTML = "";
  navContainer.append(navToggleBtn);
  navContainer.style.backgroundColor = "transparent";
  navContainer.style.paddingRight = "0";
}

function displayNav(projects) {
  const navContainer = document.getElementById("side-nav");
  navContainer.style.paddingRight = "";
  navContainer.innerHTML = "";
  navContainer.style.backgroundColor = "#00000062";
  const navToggleBtn = createNavToggleBtn();
  navToggleBtn.style.position = "static";
  const projectsSection = document.createElement("div");
  projectsSection.id = "nav-projects";
  const projectsTitle = document.createElement("p");
  projectsTitle.textContent = "PROJECTS";
  projectsTitle.id = "nav-projects-title";
  projectsSection.append(projectsTitle);

  projects.forEach((project) => {
    const projectElement = document.createElement("button");
    projectElement.textContent = `${project.name}`;
    projectElement.className = "project-selector-btn";
    projectsSection.append(projectElement);
  });

  navContainer.append(navToggleBtn, projectsSection);
}

export { displayNav, hideNav };
