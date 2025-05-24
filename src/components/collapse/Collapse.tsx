import React, { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './collapse.module.scss';

export type CollapseProps = {
  isOpen: boolean;
  children: ReactNode;
  duration?: number;
};

const Collapse: React.FC<CollapseProps> = ({ isOpen, children, duration = 100 }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [contentHeight, setContentHeight] = useState<string | number>(isOpen ? 'auto' : 0);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();

  useLayoutEffect(() => {
    setShouldRender(isOpen);
  }, [isOpen]);

  useLayoutEffect(() => {
    if (!shouldRender) return;

    if (isOpen) {
      setContentHeight(0);
      animationFrameId.current = requestAnimationFrame(() => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      });
    } else {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
        animationFrameId.current = requestAnimationFrame(() => {
          setContentHeight(0);
        });
      }
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isOpen, shouldRender]);

  const handleTransitionEnd = () => {
    if (isOpen) {
      setContentHeight('auto');
    } else {
      setShouldRender(false);
    }
  };

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      const newHeight = contentRef.current.scrollHeight + 'px';
      setContentHeight(newHeight);
    }
  }, []);

  // Обновляем высоту при изменении содержимого
  useEffect(() => {
    if (!shouldRender) return null;

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [shouldRender, updateHeight, children]);

  if (!shouldRender) return;
  return (
    <div
      ref={contentRef}
      style={{
        overflow: 'hidden',
        transition: `height ${duration}ms ease`,
        height: contentHeight,
        willChange: 'height',
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      {shouldRender && children}
    </div>
  );
};

export default Collapse;
