// Sin eventos: el toggle lo maneja el componente por dentro.
export default function AccordionDemo() {
  return (
    <mi-accordion style={{ maxWidth: 340 }}>
      <mi-accordion-item>
        <span slot="heading">Item 1</span>
        <div>Panel one content</div>
      </mi-accordion-item>
      <mi-accordion-item>
        <span slot="heading">Item 2</span>
        <div>Panel 2 content</div>
      </mi-accordion-item>
    </mi-accordion>
  );
}
