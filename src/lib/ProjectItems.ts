interface Projects {
  title: string;
  desc: string;
  link: string;
  image: string;
  tech: { title: string; link: string }[];
}

const ProjectItems: Projects[] = [
  {
    title: "PPTQ-AM",
    desc: "Project Pertama saya, yang di kerjakan bersama teman saya di kampus",
    link: "https://pptqam.ponpes.id",
    image: "./src/assets/project1.png",
    tech: [
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
        title: "tailwindcss",
        link: "https://tailwindcss.com",
      },
      {
        title: "php",
        link: "https://www.php.net/",
      },
    ],
  },
  {
    title: "First Portfolio",
    desc: "Portfolio pertama saya dengan belajar reactjs dan threejs, dan ini hasilnya.",
    link: "https://aldiipratama.vercel.app",
    image: "./src/assets/project2.png",
    tech: [
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
        title: "reactjs",
        link: "https://react.dev",
      },
      {
        title: "nextjs",
        link: "https://nextjs.org/",
      },
      {
        title: "tailwindcss",
        link: "https://tailwindcss.com",
      },
      {
        title: "threejs",
        link: "https://threejs.org",
      },
    ],
  },
  {
    title: "Tiktok Clone Web",
    desc: "Project pembelajaran otodidak saya, dengan mengikuti course dari javascript mastery",
    link: "https://tiktok-cloning.netlify.app/",
    image: "./src/assets/project3.png",
    tech: [
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
        title: "reactjs",
        link: "https://react.dev",
      },
      {
        title: "nextjs",
        link: "https://nextjs.org/",
      },
      {
        title: "typescript",
        link: "https://www.typescriptlang.org/",
      },
      {
        title: "tailwindcss",
        link: "https://tailwindcss.com",
      },
    ],
  },
  {
    title: "Heart App",
    desc: "Project berbasis aplikasi, project lomba dari google yaitu hackfest",
    link: "",
    image: "https://placeholder.com/350x200?text=PhotoNotFound",
    tech: [
      {
        title: "dart",
        link: "https://dart.dev/",
      },
      {
        title: "flutter",
        link: "https://flutter.dev/",
      },
    ],
  },
  {
    title: "Web Undangan",
    desc: "Project website undangan keluarga",
    link: "https://undangan-trah.netlify.app/",
    image: "./src/assets/project4.png",
    tech: [
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
        title: "tailwindcss",
        link: "https://tailwindcss.com",
      },
      {
        title: "daisyui",
        link: "https://daisyui.com",
      },
    ],
  },
];

export default ProjectItems;
