import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GliderComponent } from './pages/gliders/glider/glider.component';
import { InfoCardContainerComponent } from './pages/gliders/info-card-container/info-card-container.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FlyWithUsComponent } from './pages/fly-with-us/fly-with-us.component';

const routes: Routes = [
  { path: 'planeadores', component: InfoCardContainerComponent },
  { path: 'planeadores/:designator', component: GliderComponent },
  { path: 'vuelos', component: FlyWithUsComponent },
  { path: 'contactenos', component: ContactUsComponent },
  { path: '' , component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
