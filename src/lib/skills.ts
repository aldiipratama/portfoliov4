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
        title: "VScode",
        link: "https://code.visualstudio.com/",
      },
      {
        title: "figma",
        link: "https://figma.com",
      },
      {
        title: "git",
        link: "https://git-scm.com/",
      },
      {
        title: "eclipse",
        link: "https://eclipse.org",
      },
      {
        title: "cisco",
        link: "https://cisco.com",
      },
    ],
  },
  {
    title: "frameworks",
    skill: [
      {
        title: "React",
        link: "https://react.dev",
      },
      {
        title: "vitejs",
        link: "https://vitejs.dev",
      },
      {
        title: "nextjs",
        link: "https://nextjs.org/",
      },
      {
        title: "astrojs",
        link: "https://astro.build",
      },
      {
        title: "expressjs",
        link: "https://expressjs.com",
      },
      {
        title: "react native",
        link: "https://reactnative.dev",
      },
    ],
  },
  {
    title: "databases",
    skill: [
      {
        title: "mysql",
        link: "https://www.mysql.com/",
      },
      {
        title: "supabase",
        link: "https://supabase.com/",
      },
    ],
  },
  {
    title: "others",
    skill: [
      {
        title: "sass",
        link: "https://sass-lang.com/",
      },
      {
        title: "shadcn-ui",
        link: "https://ui.shadcn.com/",
      },
      {
        title: "tailwindcss",
        link: "https://tailwindcss.com",
      },
      {
        title: "bootstrap",
        link: "https://getbootstrap.com",
      },
      {
        title: "nodejs",
        link: "https://nodejs.org",
      },
      {
        title: "jquery",
        link: "https://jquery.com",
      },
      {
        title: "daisyui",
        link: "https://daisyui.com",
      },
      {
        title: "material ui",
        link: "https://mui.com",
      },
      {
        title: "chakra-ui",
        link: "https://chakra-ui.com",
      },
      {
        title: "turtle",
        link: "https://docs.python.org/3/library/turtle.html",
      },
    ],
  },
  {
    title: "languages",
    skill: [
      {
        title: "html",
        link: "https://html.com",
      },
      {
        title: "css",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        title: "javascript",
        link: "https://javascript.com",
      },
      {
        title: "typescript",
        link: "https://www.typescriptlang.org/",
      },
      {
        title: "php",
        link: "https://www.php.net/",
      },
      {
        title: "python",
        link: "https://python.org",
      },
      {
        title: "java",
        link: "https://java.com",
      },
      {
        title: "dart",
        link: "https://dart.dev",
      },
    ],
  },
];

export default skills;
