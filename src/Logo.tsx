/**
 * Logo de LIRKAY
 * Edita este archivo para cambiar el logo (SVG o reemplaza por <img>).
 */
export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`border border-[#C89B4A] flex items-center justify-center rounded-sm bg-[#10191B] ${className}`}>
      {/* Reemplaza este SVG por tu logo real si lo deseas */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#C89B4A]"
      >
        <path
          d="M20 2L24.5 15.5H39L27 24L31.5 37.5L20 29L8.5 37.5L13 24L1 15.5H15.5L20 2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
