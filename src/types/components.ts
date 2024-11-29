
export interface ButtonProps {
    className?: string;
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    px?: string;
    white?: boolean;
  }

  export interface SectionProps {
    className?: string;
    id?: string;
    crosses?: boolean;
    crossesOffset?: string;
    customPaddings?: boolean;
    children: React.ReactNode;
}

export interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
  }


  export interface CounterProps {
    start?: number;
    end: number;
    duration?: number; //in milliseconds
  }