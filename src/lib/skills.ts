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
        title: "react-icons",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        title: "lucide-icons",
        link: "https://lucide.dev/icons/",
      },
      {
        title: "shadcn-ui",
        link: "https://ui.shadcn.com/",
      },
      {
        title: "tailwindcss",
        link: "https://tailwindcss.com",
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
        title: "html",
        link: "https://html.com",
      },
      {
        title: "css",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        title: "sass",
        link: "https://sass-lang.com/",
      },
    ],
  },
  {
    title: "languages",
    skill: [
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
    ],
  },
];

export default skills;
