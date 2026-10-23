# LIRKAY Altitude Boost – Landing Page

Proyecto React + Vite + Tailwind CSS + Framer Motion.

## Cómo arrancar

```bash
cd lirkay-landing
npm install
npm run dev
```

## Cómo cambiar imágenes y logo (muy fácil)

### 1. Imágenes

1. Coloca tus archivos en la carpeta:
   ```
   public/images/
   ```

2. Edita el archivo **`src/assets.ts`** y cambia las rutas:

```ts
export const ASSETS = {
  HERO_BANNERS: "/images/tu-hero.png",          // Banner principal del hero
  PRODUCT_SHOWCASE: "/images/tu-producto.png",  // Botella / lata / caja
  LABEL_NUTRITION: "/images/tu-etiqueta.png",   // Tabla nutricional
  ALTITUDE_HERO: "/images/tu-altura.png",       // Opcional
} as const;
```

### 2. Logo

Edita el archivo **`src/Logo.tsx`**.

Puedes:
- Cambiar el SVG actual, o
- Reemplazarlo por una imagen:

```tsx
export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src="/images/logo.png" 
      alt="LIRKAY" 
      className={className}
    />
  );
}
```

### Estructura recomendada de imágenes

```
public/
  images/
    hero-banners.png
    product-showcase.png
    label-nutrition.png
    logo.png          ← si usas imagen para el logo
```

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run preview` | Previsualizar el build |

## Notas

- Las imágenes que no existan muestran un placeholder elegante con icono.
- El componente `ImageSlot` maneja errores de carga automáticamente.
- Fuentes: Cormorant Garamond + Manrope (cargadas desde Google Fonts).
