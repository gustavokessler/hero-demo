import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Array<Hero>> {
    return of(HEROES);
  }

  setHeroes(hero: Hero): void {
    hero.id = HEROES.length + 1;
    HEROES.push(hero);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find((x) => x.id === id));
  }

}


const HEROES: Array<Hero> = [
  {
    id: 1,
    name: "Iron Man",
    forca: 4,
    inteligencia: 10,
    agilidade: 4,
    destreza: 8
  },
  {
    id: 2,
    name: "Capt. América",
    forca: 10,
    inteligencia: 6,
    agilidade: 4,
    destreza: 9
  },
  {
    id: 3,
    name: "One Punch-Man",
    forca: 10,
    inteligencia: 10,
    agilidade: 10,
    destreza: 8
  },
  {
    id: 4,
    name: "Máquina de Combate",
    forca: 7,
    inteligencia: 4,
    agilidade: 5,
    destreza: 8
  }


];
