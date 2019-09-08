
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { TraitInfo } from "./TraitInfo";

export namespace FemaleCharacterFactionDetails {
  export const KEY = new CollectionKey("female_character_faction_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly general: string;
    readonly publicOffice: string;
    readonly missions: string;
    readonly chanceToSpawn: number;
    readonly _trait: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this.general = values["general"];
      this.publicOffice = values["public_office"];
      this.missions = values["missions"];
      this.chanceToSpawn = values["chance_to_spawn"];
      this._trait = values["trait"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get trait(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._trait);
    }
  }
}

export default FemaleCharacterFactionDetails;
