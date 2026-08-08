function handleIntersection(entries, observer) {
	for(const entry of entries) {
		const link = document.querySelector(`main menu a[href="#${entry.target.id}"]`);
		if(!link) continue;
		link.parentElement.classList.toggle('visible', entry.isIntersecting);
	}
}

const observer = new IntersectionObserver(handleIntersection);
	
document.querySelectorAll('main section[id],main h1[id]').forEach((el) => {
	observer.observe(el);
});