import { useEffect, useRef, useState } from 'react';

export default function CampoDemo() {
  const ref = useRef(null);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const onChange = (e) => setValor(e.detail.value);
    el.addEventListener('change', onChange);
    return () => el.removeEventListener('change', onChange);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <campo-numerico ref={ref} value="0">Número:</campo-numerico>
      <code style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13 }}>
        React lee: {valor}
      </code>
    </div>
  );
}
