
import { CollectionCache, CollectionKey } from "../../../common";
import { Battles } from "./Battles";

export namespace HistoricalBattlesUiLocations {
  export const KEY = new CollectionKey("historical_battles_ui_locations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly x: number;
    readonly y: number;
    readonly heightPercent: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.x = values["x"];
      this.y = values["y"];
      this.heightPercent = values["height_percent"];
    }
    
    get key(): Battles.Entry | undefined {
      const collection = <Battles.Entry[]>this.collectionCache.getCollection(Battles.KEY, Battles.Entry);
      return collection.find(entry => entry.key === this._key);
    }
  }
}

export default HistoricalBattlesUiLocations;
