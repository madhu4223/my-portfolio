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
    { label: "Angular", path: "" },
    { label: "Node.Js", path: "" },
    { label: "JavaScript", path: "" },
    { label: "TypeScript", path: "" },
    { label: "SQL", path: "" },
    { label: "MongoDB", path: "" },
    // { label: "PostGres", path: "" },
  ]
}
