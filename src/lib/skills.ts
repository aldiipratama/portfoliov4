import {
  astro,
  bootstrap,
  chakraui,
  cisco,
  css,
  daisyui,
  dart,
  eclipse,
  express,
  figma,
  git,
  html,
  java,
  jquery,
  js,
  mui,
  mysql,
  next,
  nodejs,
  php,
  python,
  react,
  reactNative,
  sass,
  shadcnui,
  supabase,
  tailwind,
  ts,
  turtle,
  vite,
  vscode,
} from "@/lib/constans";

interface skill {
  title: string;
  link: string;
}

interface skils {
  title: string;
  skill: skill[];
}

const skills: skils[] = [
  {
    title: "tools",
    skill: [
      {
        title: vscode.title,
        link: vscode.link,
      },
      {
        title: figma.title,
        link: figma.link,
      },
      {
        title: git.title,
        link: git.link,
      },
      {
        title: eclipse.title,
        link: eclipse.link,
      },
      {
        title: cisco.title,
        link: cisco.link,
      },
    ],
  },
  {
    title: "frameworks",
    skill: [
      {
        title: react.title,
        link: react.link,
      },
      {
        title: vite.title,
        link: vite.link,
      },
      {
        title: next.title,
        link: next.link,
      },
      {
        title: astro.title,
        link: astro.link,
      },
      {
        title: express.title,
        link: express.link,
      },
      {
        title: reactNative.title,
        link: reactNative.link,
      },
    ],
  },
  {
    title: "databases",
    skill: [
      {
        title: mysql.title,
        link: mysql.link,
      },
      {
        title: supabase.title,
        link: supabase.link,
      },
    ],
  },
  {
    title: "others",
    skill: [
      {
        title: sass.title,
        link: sass.link,
      },
      {
        title: shadcnui.title,
        link: shadcnui.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: bootstrap.title,
        link: bootstrap.link,
      },
      {
        title: nodejs.title,
        link: nodejs.link,
      },
      {
        title: jquery.title,
        link: jquery.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
      {
        title: mui.title,
        link: mui.link,
      },
      {
        title: chakraui.title,
        link: chakraui.link,
      },
      {
        title: turtle.title,
        link: turtle.link,
      },
    ],
  },
  {
    title: "languages",
    skill: [
      {
        title: html.title,
        link: html.link,
      },
      {
        title: css.title,
        link: css.link,
      },
      {
        title: js.title,
        link: js.link,
      },
      {
        title: ts.title,
        link: ts.link,
      },
      {
        title: php.title,
        link: php.link,
      },
      {
        title: python.title,
        link: python.link,
      },
      {
        title: java.title,
        link: java.link,
      },
      {
        title: dart.title,
        link: dart.link,
      },
    ],
  },
];

export default skills;
