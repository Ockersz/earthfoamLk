import * as tracking from './tracking.js';

try {
	const product_ids = [];
	document.querySelectorAll('[data-product-id][data-variant-id]').forEach(function(el) {
		product_ids.push({
			product: parseInt(el.dataset.productId),
			variant: parseInt(el.dataset.variantId),
		});
	});
	const impressions = product_ids.map(function(ids, i) {
		return tracking.buildImpression(ids.product.toString(), ids.variant.toString(), i+1, undefined, window.location.pathname);
	});
	tracking.onCollectionView(impressions);
} catch(e) {
	console.error(e);
}

try {
	document.querySelectorAll('[data-product-id][data-variant-id]').forEach(function(el, i) {
		const p_id = parseInt(el.dataset.productId);
		const v_id = parseInt(el.dataset.variantId);
		el.addEventListener('click', function(e) {
			const prod = tracking.buildProduct(p_id.toString(), v_id.toString(), undefined, i);
			tracking.onProductClick(prod);
		});
	});
} catch(e) {
	console.error(e);
}
