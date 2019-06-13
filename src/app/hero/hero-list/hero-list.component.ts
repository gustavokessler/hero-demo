import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-list",
  templateUrl: "./hero-list.component.html",
  styleUrls: ["./hero-list.component.scss"]
})
export class HeroListComponent implements OnInit {

  heroes: Array<Hero>;
  selectedHero: Hero;

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((res) => {
      this.heroes = res;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
