// To be made dynamic with web packs on future

// import Homepage333 from "../assets/projects/lifetime/Homepage333.PNG"
// import Activity from "../assets/projects/lifetime/Activity33.PNG"
// import AlarmPage from "../assets/projects/lifetime/Alarmmm page.PNG"

import LifeTime1 from "../assets/projects/LifeTme/1.png"
import LifeTime2 from "../assets/projects/LifeTme/2.png"
import LifeTime3 from "../assets/projects/LifeTme/3.png"
import LifeTime4 from "../assets/projects/LifeTme/4.png"
import LifeTime5 from "../assets/projects/LifeTme/5.png"
import LifeTime6 from "../assets/projects/LifeTme/6.png"
import LifeTime7 from "../assets/projects/LifeTme/7.png"
import LifeTime8 from "../assets/projects/LifeTme/8.png"
import LifeTime9 from "../assets/projects/LifeTme/9.png"
import LifeTime10 from "../assets/projects/LifeTme/10.png"
import LifeTime11 from "../assets/projects/LifeTme/11.png"
import LifeTime12 from "../assets/projects/LifeTme/12.png"

import RPSOnline from "../assets/projects/RPSOnline.png"

import CrusadersSkirmish from "../assets/projects/GameLatest.png"

import RpsPHP from "../assets/projects/PHP RPS/2.jpg"
import RpsPHP2 from "../assets/projects/PHP RPS/1.PNG"
import RpsPHP3 from "../assets/projects/PHP RPS/3.jpg"

import SilverSquares from "../assets/projects/Silver Squares/1.PNG"

import SilverSqaures from "../assets/projects/Silver QS/1.PNG"
import SilverSqaures2 from "../assets/projects/Silver QS/2.PNG"
import SilverSqaures3 from "../assets/projects/Silver QS/3.PNG"
import SilverSqaures4 from "../assets/projects/Silver QS/4.PNG"
import SilverSqaures5 from "../assets/projects/Silver QS/5.PNG"
import SilverSqaures6 from "../assets/projects/Silver QS/Capture.PNG"

import PostMaker from "../assets/projects/PostMaker/PostMaker.PNG"

import NextPort from "../assets/projects/Next Portfolio/1.PNG"

import AntiquePort from "../assets/projects/antique modern/1.PNG"
import { image } from "framer-motion/client"

export const projects = [
  {
    title: "LifeTime",
    slug: "lifetime",
    description: "LifeTime is a cross-platform website with an android application that not only allows you to track your daily activities and goals but also have an AI Assistant that can help you with your daily tasks and planning",
    gallery: [
      {
        image: [LifeTime1],
        description: "This is the first image"
      },
      {
        image: [LifeTime2],
        description: "This is the second image"
      },
      {
        image: [LifeTime3],
        description: "This is the third image"
      },
      {
        image: [LifeTime4],
        description: "This is the fourth image"
      },
      {
        image: [LifeTime5],
        description: "This is the fifth image"
      },
      {
        image: [LifeTime6],
        description: "This is the sixth image"
      },
      {
        image: [LifeTime7],
        description: "This is the seventh image"
      },
      {
        image: [LifeTime8],
        description: "This is the eighth image"
      },
      {
        image: [LifeTime9],
        description: "This is the ninth image"
      },
      {
        image: [LifeTime10],
        description: ""
      },
      {
        image: [LifeTime11],
        description: ""
      },
      {
        image: [LifeTime12],
        description: "The LifeTime App"
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
      }
    ],
    links: [
      { label: "Visit", url: "https://crusaders-skirmish.web.app/" }
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
      { label: "Visit", url: "https://rockpaperscissors-online.web.app" }
    ],
    tags: ["React", "Socket.IO", "ExpressJS", "Jest", "NodeJS", "MongoDB", "TailwindCSS", "Firebase"],
    style: "column",
    theme: "white"
  },
  {
    title: "Rock Paper Scissors PHP",
    slug: "rps-php",
    description: "This project takes me back to when I first began learning PHP, jQuery, and MySQL a few years ago. It became my very first web-based game project—a simple implementation of Rock-Paper-Scissors where match data was stored in a MySQL database. Even now, the database still lives on my computer as a little time capsule of my early work. ",
    gallery: [
      {
        image : [],
        description: "What made it special was that it introduced me to my first real CRUD operations. Every win, loss, or tie was saved, teaching me how databases interact with web applications in practice. I also got my first taste of design challenges. At the time, I was nervous about using images pulled from the internet, so I decided to draw all the game assets myself in Krita. Looking back, it was a small but meaningful step toward both creativity and responsibility in my projects."
      },
      {
        image: [RpsPHP, RpsPHP3],
        description: "At its core, the game was straightforward—just a classic offline Rock-Paper-Scissors match. You make your choice, the computer randomly selects its move, and the outcome is stored in the MySQL database. What made it fun was being able to view your entire game history: each round displayed your choice, the computer’s response, the result, the exact timestamp, and even a unique game ID."
      },
      {
        image: [RpsPHP2],
        description: "I also built in the ability to delete past rounds, which gave me my first experience in handling data persistence and record management. While simple, these features taught me the fundamentals of structuring and maintaining data in real-world applications."
      }
    ],
    links: [],
    tags: ["PHP", "MySQL", "JQuery", "Ajax"],
    style: "column",
    theme: "white"
  },
  {
    title: "Silver Squares Online",
    slug: "silver-squares",
    description: "I first came across a clip from the game show Golden Balls, I was hooked because of the psychology behind the final round. Two players had to decide whether to split or steal the winnings. If one chose steal, they’d take it all. If both stole, they’d walk away with nothing. But if both split, they shared the prize. What really caught my attention was how one contestant boldly declared, “I’m going to steal.” At first, it sounded like pure arrogance, but it turned out to be a clever bluff. By saying that, he backed the other player into a corner—forcing him to choose split, or risk losing everything. It was such a fascinating mix of strategy, psychology, and manipulation that it stuck with me.",
    gallery: [
      {
        image: [SilverSquares]
      },
      {
        image: [SilverSqaures6, SilverSqaures],
        description: "Players begin by joining a lobby, where the system ensures that no single participant can start the game alone — at least two players are required to initiate a match. This design not only keeps the game fair but also mirrors the collaborative and competitive dynamics of the original game show. Once the game starts, the board generates tiles that vary depending on the number of players. These tiles can appear as silver, gray, or black, each introducing different possibilities and adding variety to the experience. This mechanic keeps the gameplay fresh and ensures that no two sessions feel exactly the same."
      },
      {
        image: [SilverSqaures2],
        description: "Building a live chat system that updated instantly alongside the game was both challenging and rewarding. It gave me practical insight into handling event-driven architecture, managing multiple users in a lobby, and synchronizing state across clients. More than just recreating a game show scenario, this project became an important step in strengthening my skills with real-time applications."
      },
      {
        image: [SilverSqaures3],
        description: "After the tiles are revealed, the game moves into the voting phase. Here, players have the opportunity to vote someone out of the match. Eliminated players can no longer compete, but they aren’t entirely removed — they remain as spectators, able to observe the rest of the game unfold in real time. This adds to the social aspect, as eliminated players can still engage with the experience. The game continues until only two players remain (or if the match began with just two). At this stage, the final showdown begins — the iconic “Split or Steal” moment inspired directly by Golden Balls. Each player must decide: cooperate to share the reward, or betray their opponent to take it all."
      },
      {
        image: [SilverSqaures4, SilverSqaures5],
        description: "And finally… the winner is revealed!"
      }
    ],
    links: [
      { label: "Visit", url: "silversquaresonline.web.app" }
    ],
    tags: ["React", "Socket.IO", "ExpressJS", "Jest", "NodeJS", "MongoDB", "TailwindCSS", "Firebase"],
    style: "column",
    theme: "white"
  },
  {
    title: "Antique Portfolio",
    slug: "antique-portfolio",
    description: "The Antique Portfolio was one of my very first projects while learning React. It’s a simple portfolio website designed with an antique-modern aesthetic, focusing more on visual style than complex functionality.",
    gallery: [
      {
        image: [AntiquePort],
        description: "At the time, I wasn’t aiming to build anything advanced. Instead, this project was about applying what I had already learned in React — setting up components, handling basic state, and structuring a simple UI. I didn’t gain many new technical insights compared to later projects, but it was still a valuable step in practicing consistency and turning ideas into something tangible."
      },
      {
        image: [],
        description: "What stands out to me is how quickly it came together. I built it in just a single day — starting in the afternoon and finishing by night. While simple, it gave me the confidence that I could actually design, code, and complete a full project in a short timeframe."
      },
      {
        image: [],
        description: "Looking back, the Antique Portfolio wasn’t about advanced features or new challenges; it was about building momentum and proving to myself that I could create and ship a project from scratch."
      }
    ],
    links: [],
    tags: ["React", "TailwindCSS", "FramerMotion"],
    style: "column",
    theme: "white"
  },
  {
    title: "Portfolio NextJS",
    slug: "next-portfolio",
    description: "When I decided to learn Next.js, I thought the best way to approach it was through a real project — my portfolio site. I didn’t just dive in blindly; I started with a 3-hour tutorial, which I paced out over 3 days. This helped me establish a foundation and get familiar with the core features of Next.js.",
    gallery: [
      {
        image: [NextPort],
        description: "Of course, finishing a single tutorial doesn’t instantly make anyone an expert. But what it did give me was a solid glimpse into the framework’s potential and how it could make development more powerful compared to plain React. Since I already had experience working with React, some parts felt very natural — like component structures and props. At the same time, I discovered new concepts unique to Next.js, such as file-based routing, server-side rendering, and API routes, which opened my eyes to more modern ways of building full-stack applications."
      },
      {
        image: [],
        description: "Rather than just following along step by step, I constantly paused to experiment with my own ideas. I tweaked layouts, changed styling approaches, and tested out different ways of handling data. This “learn by doing” approach made the process not just educational, but also fun and engaging."
      },
      {
        image: [],
        description: "In the end, building this portfolio with Next.js wasn’t just about completing a tutorial — it was about gaining confidence in trying new technologies, pushing myself to explore beyond the basics, and laying the groundwork for more advanced projects in the future. It reminded me that every small project is a stepping stone, and that hands-on learning is one of the best ways to grow as a developer."
      }
    ],
    links: [],
    tags: ["NextJS", "TailwindCSS", "FramerMotion"],
    style: "column",
    theme: "white"
  },
  {
    title: "PostMaker PHP",
    slug: "postmaker",
    description: 'PostMaker was my early attempt at creating a blogging tool about two years ago. At the time, my plan was to host my blog on GitHub Pages, but since it only supports static pages, I thought: "What if I built a site that could generate posts for me instead?"',
    gallery: [
      {
        image: [PostMaker],
        description: "The idea was simple. Enter a title, description, images, and other details -> Preview the post instantly on the screen using jQuery + AJAX -> Save everything into a MySQL database. -> Export the data into a JSON file that my static GitHub blog could read and display as blog posts. I managed to get the input, preview, and database storage working, but I hit a wall when it came to exporting JSON without a proper backend. That limitation, along with shifting my focus to learning the MERN stack, eventually led me to put this project on hold. Even though it never fully launched, PostMaker was a valuable step in my journey. It taught me database handling, AJAX workflows, and backend fundamentals before I moved on to more advanced stacks."
      },
    ],
    links: [],
    tags: ["PHP", "JQuery", "MySQL"],
    style: "column",
    theme: "white"
  },
];