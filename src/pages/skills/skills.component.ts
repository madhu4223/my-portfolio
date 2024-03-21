import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { label: "React.Js", path: "assets/images/React_icon.png" },
    { label: "Angular", path: "assets/images/Angular_icon.png" },
    { label: "Node.Js", path: "assets/images/Node_icon.jpeg" },
    { label: "JavaScript", path: "assets/images/JS_icon.png" },
    { label: "TypeScript", path: "assets/images/TS_icon.png" },
    { label: "Jest", path: "assets/images/Jest_icon.png" },
    { label: "SQL", path: "assets/images/SQL_icon.png" },
    { label: "MongoDB", path: "assets/images/Mongo_icon.png" },
    
  ]
}
