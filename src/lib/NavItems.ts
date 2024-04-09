export interface Navs {
  title: string;
  link: string;
}

const NavItems: Navs[] = [
  {
    title: "home",
    link: "#",
  },
  {
    title: "projects",
    link: "projects",
  },
  {
    title: "skills",
    link: "skills",
  },
  {
    title: "about-me",
    link: "aboutme",
  },
  {
    title: "contact",
    link: "contact",
  },
];

export const NavProjectItems: Navs[] = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "complete-app",
    link: "completeapp",
  },
  {
    title: "small-project",
    link: "smallproject",
  },
];

export const NavAboutItems: Navs[] = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "skills",
    link: "skills",
  },
  {
    title: "funfact",
    link: "funfact",
  },
];

export const NavContactItems: Navs[] = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "all-media",
    link: "allmedia",
  },
];

export default NavItems;
