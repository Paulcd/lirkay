/**
 * ============================================================
 *  ASSETS - Cambia aquí las imágenes y el logo fácilmente
 * ============================================================
 * 
 * 1. Coloca tus imágenes en la carpeta /public/
 * 2. Actualiza las rutas de abajo (empiezan con / porque están en public/)
 * 3. El logo es un SVG inline en Logo.tsx - edítalo allí si quieres cambiarlo
 */

export const ASSETS = {
  // Banner principal del Hero (lado derecho)
  HERO_BANNERS: "/images/hero-banners.png",

  // Showcase de productos (botella, lata, caja)
  PRODUCT_SHOWCASE: "/images/product-showcase.png",

  // Etiqueta nutricional / reverso del producto
  LABEL_NUTRITION: "/images/label-nutrition.png",

  // Imagen de altura / montañas (si se usa)
  ALTITUDE_HERO: "/images/altitude-hero.png",
} as const;
