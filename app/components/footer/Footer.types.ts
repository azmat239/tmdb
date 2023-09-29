export type footerType = {
  logo: {
    imgSrc: string;
    url: string;
    imgAlt: string;
  };
  menu: Array<{
    title: string;
    links: Array<{
      text: string;
      url: string;
    }>;
  }>;
  extraClasses?: string;
};
