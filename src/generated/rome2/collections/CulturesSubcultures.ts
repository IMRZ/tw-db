
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { BattleTerrainFarms } from "./BattleTerrainFarms";

export namespace CulturesSubcultures {
  export const KEY = new CollectionKey("cultures_subcultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly subculture: string;
    readonly _culture: string;
    readonly index: number;
    readonly _farm: string;
    readonly name: string;
    readonly confederationScreenName: string;
    readonly confederationSummaryName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.subculture = values["subculture"];
      this._culture = values["culture"];
      this.index = values["index"];
      this._farm = values["farm"];
      this.name = values["name"];
      this.confederationScreenName = values["confederation_screen_name"];
      this.confederationSummaryName = values["confederation_summary_name"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get farm(): BattleTerrainFarms.Entry | undefined {
      const collection = <BattleTerrainFarms.Entry[]>this.collectionCache.getCollection(BattleTerrainFarms.KEY, BattleTerrainFarms.Entry);
      return collection.find(entry => entry.farm === this._farm);
    }
  }
}

export default CulturesSubcultures;
