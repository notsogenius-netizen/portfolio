export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "getHired - Job Portal",
    desc: "The ultimate job portal designed to connect job seekers with their dream careers. Whether you’re just starting out, looking to advance in your field, or seeking a complete career change, GetHired offers the tools and resources you need to navigate the job market with confidence.",
    subdesc:
      "Built as a unique app with React, Tailwind CSS, JavaScript, Supabase, Shadcn UI and Clerk, getHired is designed for optimal performance and scalability.",
    href: "https://github.com/notsogenius-netizen/getHired",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
  {
    title: "MoonWalk - Blog App",
    desc: "Welcome to Moon Walk, the blog app that invites you to journey through thoughts, ideas, and experiences under the glow of a metaphorical moon. Whether you’re a seasoned writer or just starting out, Moon Walk offers a serene space for self-expression and discovery.",
    subdesc:
      "Built with React and Appwrite for its backend, Moon Walk is an intuitive platform that allows users to create, edit, and delete their own blogs. It offers a seamless experience for writers and readers alike.",
    href: "https://github.com/notsogenius-netizen/BlogApp",
    texture: "/textures/project/moonWalk.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Appwrite",
        path: "/assets/appwrite.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    programmerScale: isSmall ? 3 : isMobile ? 3.5 : 5.8,
    programmerPosition: isMobile ? [-0.5, 3.5, 0] : [-0.7, -0.9, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -8, -5],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -13],
  };
};
