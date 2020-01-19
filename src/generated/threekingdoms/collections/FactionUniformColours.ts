
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionUniformColours {
  export const KEY = new CollectionKey("faction_uniform_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionName: any;
    readonly primaryColourR: number;
    readonly primaryColourG: number;
    readonly primaryColourB: number;
    readonly secondaryColourR: number;
    readonly secondaryColourG: number;
    readonly secondaryColourB: number;
    readonly tertiaryColourR: number;
    readonly tertiaryColourG: number;
    readonly tertiaryColourB: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionName = values["faction_name"];
      this.primaryColourR = values["primary_colour_r"];
      this.primaryColourG = values["primary_colour_g"];
      this.primaryColourB = values["primary_colour_b"];
      this.secondaryColourR = values["secondary_colour_r"];
      this.secondaryColourG = values["secondary_colour_g"];
      this.secondaryColourB = values["secondary_colour_b"];
      this.tertiaryColourR = values["tertiary_colour_r"];
      this.tertiaryColourG = values["tertiary_colour_g"];
      this.tertiaryColourB = values["tertiary_colour_b"];
    }
    
  }
}

export default FactionUniformColours;
