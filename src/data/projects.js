import Homepage333 from "../assets/projects/lifetime/Homepage333.PNG"
import Activity from "../assets/projects/lifetime/Activity33.PNG"
import AlarmPage from "../assets/projects/lifetime/Alarmmm page.PNG"
import RPSOnline from "../assets/projects/RPSOnline.png"
import CrusadersSkirmish from "../assets/projects/GameLatest.png"
import RpsPHP from "../assets/projects/PHP RPS/2.jpg"
import RpsPHP2 from "../assets/projects/PHP RPS/1.PNG"
import RpsPHP3 from "../assets/projects/PHP RPS/3.jpg"
import SilverSquares from "../assets/projects/Silver Squares/1.PNG"
import PostMaker from "../assets/projects/PostMaker/PostMaker.PNG"
import NextPort from "../assets/projects/Next Portfolio/1.PNG"
import AntiquePort from "../assets/projects/antique modern/1.PNG"

export const projects = [
  {
    title: "LifeTime",
    slug: "lifetime",
    description: "LifeTime is a cross-platform website with an android application that not only allows you to track your daily activities and goals but also have an AI Assistant that can help you with your daily tasks and planning",
    gallery: [
      {
        image: [Homepage333, Activity],
        description: "This is the first image"
      },
      {
        image: [AlarmPage],
        description: "This is the second image"
      }
    ],
    links: [
      { label: "Visit", url: "https://lifetime-schedules.web.app" }
    ],
    tags: ["React", "FramerMotion", "TailwindCSS", "Firebase", "AI", "NodeJS", "ExpressJS", "MongoDB", "Android", "Kivy", "App"],
    style: "column",
    theme: "dark"
  },
  {
    title: "Crusader's Skirmish",
    slug: "crusaders-skirmish",
    description: "Crusader's Skirmish is an upcoming card clash online game on the browser playable on both desktop and mobile! Using Socket.IO",
    gallery: [
      {
        image: [CrusadersSkirmish],
        description: "Another feature screenshot"
      },
      {
        image: ["https://via.placeholder.com/150"],
        description: "Final demo screenshot"
      }
    ],
    links: [
      { label: "Visit", url: "lifetime-schedules.web.app" }
    ],
    tags: ["React", "Socket.IO", "ExpressJS", "Jest", "NodeJS", "MongoDB", "TailwindCSS", "Firebase"],
    style: "column",
    theme: "white"
  },
  {
    title: "Rock Paper Scissors Online",
    slug: "rps-online",
    description: "RPS Online is made by API Polling to check in interval the status of both players",
    gallery: [
      {
        image: [RPSOnline],
        description: "Another feature screenshot"
      },
      {
        image: ["https://via.placeholder.com/150"],
        description: "Final demo screenshot"
      }
    ],
    links: [
      { label: "Visit", url: "lifetime-schedules.web.app" }
    ],
    tags: ["React", "Socket.IO", "ExpressJS", "Jest", "NodeJS", "MongoDB", "TailwindCSS", "Firebase"],
    style: "column",
    theme: "white"
  },
  {
    title: "Rock Paper Scissors PHP",
    slug: "rps-php",
    description: "One of my very first project where I learned PHP, MySQL, JQuery and Ajax",
    gallery: [
      {
        image: [RpsPHP],
        description: "Another feature screenshot"
      },
      {
        image: [RpsPHP3],
        description: "Final demo screenshot"
      },
      {
        image: [RpsPHP2],
        description: "Final demo screenshot"
      }
    ],
    links: [
      { label: "Visit", url: "lifetime-schedules.web.app" }
    ],
    tags: ["PHP", "MySQL", "JQuery", "Ajax"],
    style: "column",
    theme: "white"
  },
  {
    title: "Silver Squares Online",
    slug: "silver-squares",
    description: "An Imitation of the American game show of Golden Balls. With the use of Socket.IO",
    gallery: [
      {
        image: [SilverSquares],
        description: "Another feature screenshot"
      },
      {
        image: ["https://via.placeholder.com/150"],
        description: "Final demo screenshot"
      }
    ],
    links: [
      { label: "Visit", url: "lifetime-schedules.web.app" }
    ],
    tags: ["React", "Socket.IO", "ExpressJS", "Jest", "NodeJS", "MongoDB", "TailwindCSS", "Firebase"],
    style: "column",
    theme: "white"
  },
  {
    title: "Antique Portfolio",
    slug: "antique-portfolio",
    description: "A Portfolio made with React and TailwindCSS",
    gallery: [
      {
        image: [AntiquePort],
        description: "Another feature screenshot"
      },
      {
        image: ["https://via.placeholder.com/150"],
        description: "Final demo screenshot"
      }
    ],
    links: [
      { label: "Visit", url: "lifetime-schedules.web.app" }
    ],
    tags: ["React", "TailwindCSS", "FramerMotion"],
    style: "column",
    theme: "white"
  },
  {
    title: "Portfolio NextJS",
    slug: "next-portfolio",
    description: "A Portfolio made with NextJS and TailwindCSS",
    gallery: [
      {
        image: [NextPort],
        description: "Another feature screenshot"
      },
      {
        image: ["https://via.placeholder.com/150"],
        description: "Final demo screenshot"
      }
    ],
    links: [
      { label: "Visit", url: "lifetime-schedules.web.app" }
    ],
    tags: ["NextJS", "TailwindCSS", "FramerMotion"],
    style: "column",
    theme: "white"
  },
  {
    title: "PostMaker PHP",
    slug: "postmaker",
    description: "I created a PostMaker for my old planned blog that takes only JSON data",
    gallery: [
      {
        image: [PostMaker],
        description: "Another feature screenshot"
      },
      {
        image: ["https://via.placeholder.com/150"],
        description: "Final demo screenshot"
      }
    ],
    links: [
      { label: "Visit", url: "lifetime-schedules.web.app" }
    ],
    tags: ["PHP", "JQuery"],
    style: "column",
    theme: "white"
  },
];