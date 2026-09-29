document.querySelectorAll('.store-link[href=""]').forEach((link) => {
	link.addEventListener("click", (event) => event.preventDefault());
});

const sections = document.querySelectorAll(".section-pad, .legal-section");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	sections.forEach((section) => section.classList.add("reveal"));

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.08 }
	);

	sections.forEach((section) => observer.observe(section));
}