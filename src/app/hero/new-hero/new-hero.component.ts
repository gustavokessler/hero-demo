import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-new-hero",
  templateUrl: "./new-hero.component.html",
  styleUrls: ["./new-hero.component.scss"]
})
export class NewHeroComponent implements OnInit {

  hero: Hero = {
    name: "",
    forca: 0,
    inteligencia: 0,
    agilidade: 0,
    destreza: 0
  };

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
  }

  submit(): void {
    this.heroService.setHeroes(this.hero);
  }

}
