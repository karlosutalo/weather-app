import { Astro } from "./Astro.model";

export interface Astronomy{
    astro: Astro
}

export class Astronomy{
    constructor(
        public astro: Astro,
    ){}
}