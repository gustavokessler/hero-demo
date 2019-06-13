import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroRoutingModule } from "./hero-routing.module";
import { FormsModule } from "@angular/forms";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { NewHeroComponent } from "./new-hero/new-hero.component";

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, NewHeroComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ]
})
export class HeroModule { }
