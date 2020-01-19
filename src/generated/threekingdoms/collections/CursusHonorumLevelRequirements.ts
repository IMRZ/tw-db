
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";

export namespace CursusHonorumLevelRequirements {
  export const KEY = new CollectionKey("cursus_honorum_level_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subcultureKey: string;
    readonly level: number;
    readonly rank: number;
    readonly age: number;
    readonly _factionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subcultureKey = values["subculture_key"];
      this.level = values["level"];
      this.rank = values["rank"];
      this.age = values["age"];
      this._factionKey = values["faction_key"];
    }
    
    get subcultureKey(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
  }
}

export default CursusHonorumLevelRequirements;
