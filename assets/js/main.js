document.querySelectorAll('.store-link[href=""]').forEach((link) => {
	link.addEventListener("click", (event) => event.preventDefault());
});

const kaleidoscope = document.querySelector(".kaleidoscope");

if (kaleidoscope) {
	const previewImage = kaleidoscope.querySelector(".kaleidoscope-image");
	const previewTitle = kaleidoscope.querySelector("#kaleidoscope-title");
	const previewStatus = kaleidoscope.querySelector(".kaleidoscope-status");
	let activeImages = [];
	let activeIndex = 0;
	let activeGroup = "";
	let opener;

	function showPreview(index) {
		activeIndex = (index + activeImages.length) % activeImages.length;
		const image = activeImages[activeIndex].querySelector("img");
		previewTitle.textContent = `Kaleidoscope: ${activeGroup}`;
		previewStatus.textContent = `Image ${activeIndex + 1} of ${activeImages.length}`;
		previewImage.alt = image.alt;
		previewImage.width = Number(image.getAttribute("width"));
		previewImage.height = Number(image.getAttribute("height"));
		previewImage.src = image.src;
	}

	document.querySelectorAll(".showcase-grid, .showcase-grid-tablets").forEach((grid) => {
		const links = [...grid.querySelectorAll(".showcase-preview")];
		const group = grid.closest(".showcase-group");
		const label = group.querySelector(".showcase-label").textContent;
		links.forEach((link, index) => {
			link.addEventListener("click", (event) => {
				if (
					event.button !== 0 ||
					event.metaKey ||
					event.ctrlKey ||
					event.shiftKey ||
					event.altKey
				) {
					return;
				}
				event.preventDefault();
				opener = link;
				activeImages = links;
				activeGroup = label;
				showPreview(index);
				kaleidoscope.showModal();
			});
		});
	});

	previewImage.addEventListener("error", () => {
		previewStatus.textContent = `Image ${activeIndex + 1} of ${activeImages.length} could not load. Try another image.`;
	});

	kaleidoscope
		.querySelector("[data-preview-close]")
		.addEventListener("click", () => kaleidoscope.close());
	kaleidoscope
		.querySelector("[data-preview-previous]")
		.addEventListener("click", () => showPreview(activeIndex - 1));
	kaleidoscope
		.querySelector("[data-preview-next]")
		.addEventListener("click", () => showPreview(activeIndex + 1));
	kaleidoscope.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			event.preventDefault();
			kaleidoscope.close();
		}
		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
			event.preventDefault();
			showPreview(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
		}
	});
	kaleidoscope.addEventListener("click", (event) => {
		if (event.target === kaleidoscope) {
			const bounds = kaleidoscope.getBoundingClientRect();
			if (
				event.clientX < bounds.left ||
				event.clientX > bounds.right ||
				event.clientY < bounds.top ||
				event.clientY > bounds.bottom
			) {
				kaleidoscope.close();
			}
		}
	});
	kaleidoscope.addEventListener("close", () => {
		opener.focus({ preventScroll: true });
	});
}

const sections = document.querySelectorAll(".section-pad, .legal-section");

if (
	"IntersectionObserver" in window &&
	!window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
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
		{ threshold: 0.08 },
	);

	sections.forEach((section) => observer.observe(section));
}
