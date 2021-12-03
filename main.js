const menuItems = document.querySelectorAll("nav.menu-bar a");
const menuBg = document.querySelector("nav.menu-bar .menu-bg");

menuItems.forEach((i) => {
  i.addEventListener("mouseover", () => {
    let element = i.getBoundingClientRect();

    menuBg.style.left = element.x + "px";
    menuBg.style.top = element.y + "px";
    menuBg.style.width = element.width + "px";
    menuBg.style.height = element.height + "px";

    i.style.color = "#fff";
    menuBg.style.opacity = 1;
  });

  i.addEventListener("mouseout", () => {
    i.style.color = "#000";
    menuBg.style.opacity = 0;
  });
});
