const wave = document.querySelector(".wave");

if (wave) {
  wave.addEventListener("mouseenter", () => {
    wave.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(14deg)" },
        { transform: "rotate(-8deg)" },
        { transform: "rotate(12deg)" },
        { transform: "rotate(0deg)" },
      ],
      {
        duration: 720,
        easing: "ease-in-out",
      }
    );
  });
}
