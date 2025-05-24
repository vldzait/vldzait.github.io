import React from 'react';
import cn from 'clsx';
import styles from './componentInfo.module.scss';

export type ComponentInfoProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  title?: React.ReactNode;
  desc?: React.ReactNode;
  children?: React.ReactNode;
  fullWidth?: boolean;
};

const ComponentInfo = ({ className, desc, fullWidth, title, children, ...props }: ComponentInfoProps) => {
  return (
    <div className={cn(styles.root, className)} {...props}>
      <div className={styles.title}>{title}</div>
      <div>{desc}</div>
      <div className={cn(styles.main, fullWidth && styles.fullWidth)}>{children}</div>
    </div>
  );
};

export default ComponentInfo;
