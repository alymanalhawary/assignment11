import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
   {path:'about',component:AboutComponent,title:'AboutPage'},
   {path:'portfolio',component:PortfolioComponent,title:'ProtfoloiPage'},
   {path:'contact',component:ContactComponent,title:'ContactPage'},
   {path:'**',component:HomeComponent,title:'HomePage'}
];
