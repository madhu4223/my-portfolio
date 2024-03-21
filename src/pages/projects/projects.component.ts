import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects = [
  {
    id: 1,
    name: "Flex Count",
    shortDesc: "A unified WIS Platform end-to-end solution to complete Inventory Scanning and Audit services while supporting various business models through a “Self-Scan” model.",
    longDesc: "",
    techStack: "ReactJs, Typescript, Redux-thunk"
  },
  {
    id: 2,
    name: "Bond Blox",
    shortDesc: "BondbloX is the world’s first fractional bond exchange which transforms the bond market globally by enabling investors to conduct electronic bond trading of fractional bonds via partner banks and brokers.",
    longDesc: "",
    techStack: "ReactJs, NodeJs, NextJs, AWS Lambda, PostgreSQL"
  },
  {
    id: 3,
    name: "Premiere Digital Exchange",
    shortDesc: "Premiere Digital Services operates as a digital media distribution and software company. The Company offers cloud-based digital asset delivery and content optimisation solutions that enable content ingestion, preparation, management, and distribution of media assets to mobile and broadcast markets.",
    longDesc: "",
    techStack: "Angular7, NodeJs"
  },
  {
    id: 4,
    name: "ESSEXINDIA",
    shortDesc: "ESSEXINDIA is a digital intermediary between genuine buyers and verified sellers. It Leverages the power of new age digital technology for a secure liquidation of residential real estate.",
    longDesc: "",
    techStack: "NodeJs, Angular, MongoDB, MySQL"
  },
  {
    id: 5,
    name: "Way2Links",
    shortDesc: "Way2Links is a platform which allows the users to earn money from their own web content automatically through affiliate marketing.",
    longDesc: "",
    techStack: "NodeJs, HTML, Ajax, CSS, Pug, MySQL"
  },
  {
    id: 6,
    name: "Legit Lines",
    shortDesc: "Legit Lines was an experiment to create a tool that can generate SEO Worthy Content (SWC) using OpenAI’s GPT3 API. The interface was built on Angular and NodeJs. While the tool was built for personal use of a friend, soon enough, I’ve realised that it has widespread usage. Did not pursue it further due to shortage of resources.",
    longDesc: "",
    techStack: "Angular 7, Node.Js, OpenAi's GPT 3, Mongo DB"
  },
]
}
