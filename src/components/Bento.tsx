import { useRef, MouseEvent, ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface BentoProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const Bento = ({ children, className, as: Tag = 'div' }: BentoProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag ref={ref} onMouseMove={onMove} className={cn('bento', className)}>
      {children}
    </Tag>
  );
};

export default Bento;
