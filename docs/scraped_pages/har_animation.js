
const animObserver = new IntersectionObserver(handleAnimationIntersection, {rootMargin: '0px 0px -50px 0px', threshold: 0.0});

document.documentElement.toggleAttribute('data-animation-enabled', true);
document.querySelectorAll('[data-animation-waypoint]').forEach((el) => {
	animObserver.observe(el);
});

function handleAnimationIntersection(entries, observer) {
	for(const entry of entries) {
		if(entry.isIntersecting) {
			entry.target.dataset.animationTriggered = '';
		}
	}
}
