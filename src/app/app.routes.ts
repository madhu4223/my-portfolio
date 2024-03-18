import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { path } from '../utils/path';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { SkillsComponent } from '../pages/skills/skills.component';


export const routes: Routes = [
    { path: path.HOME, component: HomeComponent },
    { path: path.PROJECTS, component: ProjectsComponent },
    { path: path.SKILLS, component: SkillsComponent }
];
