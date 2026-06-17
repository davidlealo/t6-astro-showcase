import { useEffect, useRef, useState } from 'react';

export default function SliderDemo() {
  const ref = useRef(null);
  const [valor, setValor] = useState(50);

  useEffect(() => {
    const el = ref.current;
    const onChange = (e) => setValor(e.detail.value);
    el.addEventListener('change', onChange);
    return () => el.removeEventListener('change', onChange);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <mi-slider ref={ref} min="0" max="100" value="50" step="5" style={{ maxWidth: 240, flex: 1 }}>
        <mi-slider-label>0</mi-slider-label>
        <mi-slider-label position="50">50</mi-slider-label>
        <mi-slider-label position="100">100</mi-slider-label>
      </mi-slider>
      <code style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13 }}>
        React lee: {valor}
      </code>
    </div>
  );
}
