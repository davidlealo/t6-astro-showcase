// Sin eventos. Lo interesante: pasar CSS vars como objeto de estilo.
export default function CardDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <mi-card style={{ '--card-width': '150px', '--card-height': '100px' }}>
        Tamaño custom
      </mi-card>
      <mi-card>Tamaño por defecto</mi-card>
    </div>
  );
}
