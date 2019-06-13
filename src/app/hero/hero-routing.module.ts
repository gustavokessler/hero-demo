import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { NewHeroComponent } from "./new-hero/new-hero.component";

const routes: Routes = [
  { path: "heroes", component: HeroListComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "new", component: NewHeroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
