
export interface ButtonProps {
    className?: string;
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    px?: string;
    white?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
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

  export interface FormProps {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    referral: string;
    projectType: string;
    projectDescription: string;
  }