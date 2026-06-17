// Sin eventos: solo renderiza. No necesita hooks ni ref.
export default function BreadcrumbDemo() {
  return (
    <mi-breadcrumb>
      <mi-breadcrumb-item href="#">Home</mi-breadcrumb-item>
      <mi-breadcrumb-item href="#">Productos</mi-breadcrumb-item>
      <mi-breadcrumb-item>Detalle</mi-breadcrumb-item>
    </mi-breadcrumb>
  );
}
