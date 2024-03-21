import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { path } from '../utils/path';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { ProjectDetailsComponent } from '../pages/project-details/project-details.component';
import { ContactComponent } from '../pages/contact/contact.component';


export const routes: Routes = [
    { path: path.HOME, component: HomeComponent },
    { path: path.PROJECTS, component: ProjectsComponent },
    { path: path.SKILLS, component: SkillsComponent },
    { path: path.PROJECT_DETAILS , component: ProjectDetailsComponent},
    { path: path.CONTACT , component: ContactComponent}
];
