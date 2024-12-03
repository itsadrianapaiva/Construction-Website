declare module "src/constants/index.js" {
  const navigation: (
    | {
        id: string;
        title: string;
        url: string;
        onlyMobile?: undefined;
      }
    | {
        id: string;
        title: string;
        url: string;
        onlyMobile: boolean;
      }
  )[];

  const processContent: {
    id: string;
    title: string;
    text: string;
  }[];

  const processText: string;

  const processIcons: {
    id: string;
    title: string;
    icon: string;
    width: number;
    height: number;
  }[];

  const pricing: (
    | {
        id: string;
        title: string;
        description: string;
        price: string;
        features: string[];
      }
    | {
        id: string;
        title: string;
        description: string;
        price: null;
        features: string[];
      }
  )[];

  const roadmap: (
    | {
        id: string;
        title: string;
        text: string;
        date: string;
        status: string;
        imageUrl: string;
        colorful: boolean;
      }
    | {
        id: string;
        title: string;
        text: string;
        date: string;
        status: string;
        imageUrl: string;
        colorful?: undefined;
      }
  )[];

  const socials: {
    id: string;
    title: string;
    iconUrl: string;
    url: string;
  }[];

  const stats: {
    end: number;
    operator: string;
    description: string;
  }[];

  const services: (
    | {
        id: string;
        title: string;
        text: string;
        backgroundUrl: string;
        iconUrl: string;
        imageUrl: string;
        light?: undefined;
      }
    | {
        id: string;
        title: string;
        text: string;
        backgroundUrl: string;
        iconUrl: string;
        imageUrl: string;
        light: boolean;
      }
  )[];
}
