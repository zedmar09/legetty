import React, { useMemo } from 'react';
import { cn } from '../../utils/style';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
  full?: boolean;
  icon?: React.ReactNode;
  variation?: 'dashboard' | 'secondary' | 'landing' | 'link';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variation = 'dashboard',
    size = 'medium',
    icon,
    loading,
    className,
    full,
    disabled,
    children,
    type = 'button',
    ...restProps
  } = props;

  const textColor = useMemo(() => {
    switch (variation) {
      case 'dashboard':
      case 'landing':
        return 'text-white';
      case 'link':
        return 'text-mainBlue';
    }
  }, [variation]);

  const backgroundColor = useMemo(() => {
    switch (variation) {
      case 'dashboard':
        return 'bg-actionGreen';
      case 'secondary':
        return 'bg-lightest3';
      case 'landing':
        return 'bg-mainBlue';
      case 'link':
        return 'bg-transparent';
    }
  }, [variation]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case 'small':
        return 'px-8 pt-[10px] pb-[10px] text-title3';
      case 'medium':
        return 'px-20 pt-[14px] pb-[14px] text-description1';
      case 'large':
        return 'px-32 pt-[20px] pb-[20px] text-title2';
    }
  }, [size]);

  const roundness = useMemo(() => {
    switch (variation) {
      case 'secondary':
      case 'dashboard':
        return 'rounded-lg';
      case 'link':
        return '';
      case 'landing':
        return 'rounded-full';
    }
  }, [variation]);

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        `flex items-center justify-center font-semibold`,
        full && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        textColor,
        backgroundColor,
        sizeClass,
        roundness,
        className
      )}
      {...restProps}>
      {loading ? (
        <span className="loader-white" />
      ) : (
        <>
          {children} {icon && <span className={`${children && 'ml-4'}`}>{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
