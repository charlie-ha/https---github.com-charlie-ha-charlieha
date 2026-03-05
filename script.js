function menu() {
  var x = document.getElementById("navigation");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Load Bottom CTA
fetch("../bottomNav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("bottom-cta-placeholder").innerHTML = data;
  });
// animate showing CTA bottom of the page
window.addEventListener("scroll", () => {
  const cta = document.querySelector(".bottom-cta");
  if (!cta) return;

  const triggerPoint = document.body.offsetHeight - window.innerHeight - 200;

  if (window.scrollY > triggerPoint) {
    cta.classList.add("show");
  }
});
//Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projects.forEach((project) => {
      const category = project.dataset.category;

      if (filter === "all" || category.includes(filter)) {
        project.classList.remove("hide");
      } else {
        project.classList.add("hide");
      }
    });
  });
});
