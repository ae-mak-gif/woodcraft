export const site = {
  name: "WoodCraft",
  tagline: "Furniture shaped by nature. Refined by craft. Made to last.",
  whatsapp: "263787117461",
  whatsappDisplay: "+263 787 117 461",
  location: "Zimbabwe · International enquiries welcome"
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}