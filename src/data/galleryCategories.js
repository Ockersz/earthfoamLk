// Registry of product-gallery index pages (e.g. /products/hybrid-mattress,
// /products/pillow). Adding a new catalogue category is just adding an
// entry here — GalleryPage.jsx and App.jsx's routing both read from this
// generically and need no changes for it.
export const GALLERY_CATEGORIES = {
  "hybrid-mattress": {
    title: "The Hybrid Mattress.",
    subtitle:
      "Responsive pocketed coils paired with natural latex comfort. Pick the model that matches how you sleep.",
    documentTitle: "Hybrid Mattress | Earthfoam",
    productKeys: [
      "hybrid-mattress-osaka",
      "hybrid-mattress-ventura",
      "hybrid-mattress-brandford",
      "hybrid-mattress-meriden",
      "hybrid-mattress-athens-euro-top",
      "hybrid-mattress-athens-legacy",
      "hybrid-mattress-athens-signature",
      "hybrid-mattress-aurora",
    ],
    hrefFor: (productKey) =>
      `/products/hybrid-mattress/${productKey.replace("hybrid-mattress-", "")}`,
  },
  pillow: {
    title: "The Pillow.",
    subtitle:
      "Natural latex comfort, contoured to how you sleep. Pick the profile that fits you best.",
    documentTitle: "Pillows | Earthfoam",
    productKeys: [
      "pillow-standard-2zone",
      "pillow-contour",
      "pillow-standard-monozone",
      "pillow-knobby",
    ],
    hrefFor: (productKey) => `/products/pillow/${productKey.replace("pillow-", "")}`,
  },
};
