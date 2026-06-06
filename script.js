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

const caseSections = document.querySelectorAll(".case-section[id]");
const caseLinks = document.querySelectorAll(".case-sidebar a[href^='#']");

if (caseSections.length && caseLinks.length) {
  const linksById = new Map(
    [...caseLinks].map((link) => [link.getAttribute("href").slice(1), link])
  );

  const setActiveLink = (id) => {
    caseLinks.forEach((link) => {
      link.classList.toggle("active", link === linksById.get(id));
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]) {
        setActiveLink(visible[0].target.id);
      }
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    }
  );

  caseSections.forEach((section) => observer.observe(section));
  setActiveLink(caseSections[0].id);
}
