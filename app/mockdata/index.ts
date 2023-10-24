import { InputType } from "../components/Input/input.types";
import { LogoType } from "../components/Logo/Logo.type";
import { MovieCardtypes } from "../components/MovieCard/MovieCard.types";
import { MovieSectionTypes } from "../components/MovieSection/MovieSection.types";
import { NavLinkType } from "../components/NavLink/NavLink.types";
import { SearchMovieCardsType } from "../components/SearchMovie/SearchMovieCardList.types";
import { SearchSideBarType } from "../components/SearchSideBar/SearchSideBar.types";
import { footerLogoType } from "../components/footerLogo/footerLogo.type";
import { FooterMenuType } from "../components/footerMenu/FooterMenu.types";

export const links: NavLinkType[] = [
  {
    text: "Movies",
    url: "/movies",
    subLinks: [
      {
        text: "Popular",
        url: "/popular",
      },
      {
        text: "Now Playing",
        url: "/playing",
      },
      {
        text: "Upcoming",
        url: "/upcoming",
      },
      {
        text: "Top Rated",
        url: "/rated",
      },
    ],
  },
  {
    text: "Tv Shows",
    url: "/tv",
    subLinks: [
      {
        text: "Popular",
        url: "/home",
      },
      {
        text: "Airing Today",
        url: "/tv",
      },
      {
        text: "On Tv",
        url: "/people",
      },
      {
        text: "Top Rated",
        url: "/more",
      },
    ],
  },
  {
    text: "People",
    url: "/people",
    subLinks: [
      {
        text: "Popular People",
        url: "/popular",
      },
    ],
  },
  {
    text: "more",
    url: "/more",
    subLinks: [
      {
        text: "Discusion",
        url: "/discussion",
      },
      {
        text: "Leaderboard",
        url: "/leadernoard",
      },
      {
        text: "API",
        url: "/Api",
      },
      {
        text: "Support",
        url: "/Support",
      },
    ],
  },
];

export const menus: FooterMenuType[] = [
  {
    title: "THE BASICS",
    links: [
      {
        text: "AboutTMDB",
        url: "/about",
      },
      {
        text: "Contact us",
        url: "/contactus",
      },
      {
        text: "Support Forum",
        url: "/supportforum",
      },
      {
        text: "Api",
        url: "/api",
      },
      {
        text: "System Support",
        url: "/systemsupport",
      },
    ],
  },
  {
    title: "GET INVOLOVED",
    links: [
      { text: "Contribution Bible", url: "/contribution" },
      { text: "Add New Movies", url: "/addnewmovies" },
      { text: "Add New Tv Shows", url: "/addnewtvshows" },
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      { text: "Guidelines", url: "/guidelines" },
      { text: "Discussion", url: "/discussion" },
      { text: "Leaderboard", url: "/leaderboard" },
      { text: "Twiter", url: "/twiter" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      {
        text: "Terms of Use",
        url: "/terms",
      },
      {
        text: "API Terms of Use",
        url: "/apiterms",
      },
      {
        text: "Privacy Policy",
        url: "/privacypolicy",
      },
      {
        text: "DMCA Takedown Request",
        url: "/dmca",
      },
    ],
  },
];

export let logoValue: LogoType = {
  imgSrc: "tmdblogo.svg",
  url: "/",
  altText: "Not Found",
};
export let Footerlogo: footerLogoType = {
  imgSrc: "footerlogo.svg",
  url: "/",
  imgAlt: "Not Found",
};

export let movieLists: MovieCardtypes[] = [
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "The Good Doctor",
    date: "Sep 27,2017",
    url: "/",
    MenuPopoverLinks: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
    rating: 90,
  },

  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Spider-Man: Across The Spider:Verse",
    date: "Sep 27,2017",
    url: "/",
    MenuPopoverLinks: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
    rating: 20,
  },

  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Meg 2:The Trench",
    date: "Sep 27,2017",
    url: "/",

    MenuPopoverLinks: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
    rating: 10,
  },

  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Avatar The Way Of Water",
    date: "Sep 27,2017",
    url: "/",

    MenuPopoverLinks: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
    rating: 60,
  },
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "The Amazing SpiderMan",
    date: "Sep 27,2017",
    url: "/",

    MenuPopoverLinks: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
    rating: 75,
  },
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "War Of The Worlds:The Attack",
    date: "Sep 27,2017",
    url: "/",

    MenuPopoverLinks: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
    rating: 79,
  },
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Guardian of the Galaxy Vol.3",
    date: "Sep 27,2017",
    url: "/",

    MenuPopoverLinks: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
    rating: 100,
  },
  {
    image: { imgSrc: "MovieImage.svg", altText: "Not Found" },
    title: "Guardian of the Galaxy Vol.3",
    date: "Sep 27,2017",
    url: "/",

    MenuPopoverLinks: [
      {
        text: "Option 1",
        url: "https://www.google.com",
      },
      {
        text: "Option 2",
        url: "https://www.google.com",
      },
      {
        text: "Option 3",
        url: "https://www.google.com",
      },
      {
        text: "Option 4",
        url: "https://www.google.com",
      },
    ],
    rating: 70,
  },
];

export let inputProps: InputType = {
  placeholder: "Search for a Movie, Tv Shows or People ....",
  onInputChange: () => {
    console.log("Changed The Text");
  },
};

export const listsResult: SearchMovieCardsType["lists"] = [
  {
    searchImage: {
      imgSrc: "https://placehold.jp/95x150.png",
      altText: "not found",
    },
    title: "Meg 2: The Trench",
    date: "August 4, 2023",
    description:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
  },
  {
    searchImage: {
      imgSrc: "https://placehold.jp/95x150.png",
      altText: "not found",
    },
    title: "Meg 2: The Trench",
    date: "August 4, 2023",
    description:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
  },
  {
    searchImage: {
      imgSrc: "https://placehold.jp/95x150.png",
      altText: "not found",
    },
    title: "Meg 2: The Trench",
    date: "August 4, 2023",
    description:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
  },
  {
    searchImage: {
      imgSrc: "https://placehold.jp/95x150.png",
      altText: "not found",
    },
    title: "Meg 2: The Trench",
    date: "August 4, 2023",
    description:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
  },
  {
    searchImage: {
      imgSrc: "https://placehold.jp/95x150.png",
      altText: "not found",
    },
    title: "Meg 2: The Trench",
    date: "August 4, 2023",
    description:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
  },
  {
    searchImage: {
      imgSrc: "https://placehold.jp/95x150.png",
      altText: "not found",
    },
    title: "Meg 2: The Trench",
    date: "August 4, 2023",
    description:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
  },
];
