
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { TraitInfo } from "./TraitInfo";

export namespace FemaleCharacterSubcultureDetails {
  export const KEY = new CollectionKey("female_character_subculture_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subculture: string;
    readonly general: string;
    readonly publicOffice: string;
    readonly missions: string;
    readonly chanceToSpawn: number;
    readonly _trait: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subculture = values["subculture"];
      this.general = values["general"];
      this.publicOffice = values["public_office"];
      this.missions = values["missions"];
      this.chanceToSpawn = values["chance_to_spawn"];
      this._trait = values["trait"];
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get trait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._trait);
    }
  }
}

export default FemaleCharacterSubcultureDetails;
