import { Astronomy } from "./astronomy.model";

export interface AstronomyData{
    astronomy: Astronomy
}

export class AstronomyData{
    constructor(
        public astronomy: Astronomy,
    ){}
}