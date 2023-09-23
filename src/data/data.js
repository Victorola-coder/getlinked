export const navlinks = [
  {
    id: 0,
    text: "Timeline",
    link: "/timeline",
  },
  {
    id: 1,
    text: "Overview",
    link: "/overview",
  },
  {
    id: 2,
    text: "FAQs",
    link: "/Faqs",
  },
  {
    id: 3,
    text: "Contact",
    link: "/contact",
  },
];

import { nanoid } from "nanoid";

export const faqsData = [
  {
    id: nanoid(),
    title: "Can I work on a project I started before the hackathon?",
    content: "If you like man!👀",
  },
  {
    id: nanoid(),
    title: "What happens if I need help during the hackathon?",
    content: "contact me privately  and ask for help!🌟",
  },
  {
    id: nanoid(),
    title: "What happens if I don't have an idea for a project?",
    content:
      "There is always time to learn man, just calm down and think and idea will surely time, it only takes time.🚀",
  },
  {
    id: nanoid(),
    title: "Can I join a team or do I have to come with one?",
    content: "You can do what you like just be a good person man!  ㅎ",
  },
  {
    id: nanoid(),
    title: "What happens after the hackathon ends",
    content:
      "I don't think something new can happen after the hackathon ends, just watch out",
  },
  {
    id: nanoid(),
    title: "Can I work on a project I started before the hackathon?",
    content: "This is just a frequently asked question, but if you like man!",
  },
];

export const timeline = [
  {
    id: nanoid(),
    index: 1,
    title: "Hackathon Announcement",
    content:
      "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
    start: true,
    direction: "left",
  },
  {
    id: nanoid(),
    index: 2,
    title: "Teams Registration begins",
    content:
      "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
    direction: "right",
  },
  {
    id: nanoid(),
    index: 3,
    title: "Teams Registration beginsTeams Registration ends",
    content: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
    direction: "left",
  },
  {
    id: nanoid(),
    index: 4,
    title: "Announcement of the accepted teams and ideas",
    content:
      "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
    direction: "right",
  },
  {
    id: nanoid(),
    index: 5,
    title: "Getlinked Hackathon 1.0 Offically Begins",
    content:
      "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
    direction: "left",
  },
  {
    id: nanoid(),
    index: 6,
    title: "Demo Day",
    content:
      "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
    direction: "right",
    end: true,
  },
];
