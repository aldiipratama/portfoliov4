import {
  chakraui,
  css,
  daisyui,
  dart,
  flutter,
  github,
  html,
  js,
  next,
  php,
  react,
  shadcnui,
  tailwind,
  ts,
  vite,
} from "@/lib/constans";

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
    image: "project1.png",
    tech: [
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
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: php.title,
        link: php.link,
      },
    ],
  },
  {
    title: "First Portfolio",
    desc: "Portfolio pertama saya dengan github.. haha im so happy",
    link: "https://github.com/aldiipratama",
    image: "project2.png",
    tech: [
      {
        title: github.title,
        link: github.link,
      },
    ],
  },
  {
    title: "Tiktok Clone Web",
    desc: "Project pembelajaran otodidak saya, dengan mengikuti course dari javascript mastery",
    link: "https://tiktok-cloning.netlify.app/",
    image: "project3.png",
    tech: [
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
        title: react.title,
        link: react.link,
      },
      {
        title: next.title,
        link: next.link,
      },
      {
        title: ts.title,
        link: ts.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
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
        title: dart.title,
        link: dart.link,
      },
      {
        title: flutter.title,
        link: flutter.link,
      },
    ],
  },
  {
    title: "Web Undangan",
    desc: "Project website undangan keluarga",
    link: "https://undangan-trah.netlify.app/",
    image: "project4.png",
    tech: [
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
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: daisyui.title,
        link: daisyui.link,
      },
    ],
  },
  {
    title: "Second Portfolio",
    desc: "Portfolio kedua saya, dengan belajar reactjs dan chakra-ui",
    image: "project5.png",
    link: "https://aldipratama-portfoliov2.vercel.app",
    tech: [
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
        title: vite.title,
        link: vite.link,
      },
      {
        title: react.title,
        link: react.link,
      },
      {
        title: chakraui.title,
        link: chakraui.link,
      },
    ],
  },
  {
    title: "Third Portfolio",
    desc: "portfolio ketiga saya, hanya memperbaiki dari portfolio v2",
    image: "project6.png",
    link: "https://aldipratama-portfoliov3.vercel.app",
    tech: [
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
        title: vite.title,
        link: vite.link,
      },
      {
        title: react.title,
        link: react.link,
      },
      {
        title: chakraui.title,
        link: chakraui.link,
      },
      {
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: next.title,
        link: next.link,
      },
    ],
  },
  {
    title: "Fourth portfolio",
    desc: "portfolio keempat saya untuk mengikuti lomba membuat portfolio dari hmtif universitas pasundan",
    image: "project7.png",
    link: "https://aldipratama.vercel.app",
    tech: [
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
        title: tailwind.title,
        link: tailwind.link,
      },
      {
        title: react.title,
        link: react.link,
      },
      {
        title: vite.title,
        link: vite.link,
      },
      {
        title: shadcnui.title,
        link: shadcnui.link,
      },
    ],
  },
];

export default ProjectItems;
