
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { TraitInfo } from "./TraitInfo";

export namespace FemaleCharacterCultureDetails {
  export const KEY = new CollectionKey("female_character_culture_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culture: string;
    readonly general: string;
    readonly publicOffice: string;
    readonly missions: string;
    readonly chanceToSpawn: number;
    readonly _trait: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culture = values["culture"];
      this.general = values["general"];
      this.publicOffice = values["public_office"];
      this.missions = values["missions"];
      this.chanceToSpawn = values["chance_to_spawn"];
      this._trait = values["trait"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get trait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._trait);
    }
  }
}

export default FemaleCharacterCultureDetails;
