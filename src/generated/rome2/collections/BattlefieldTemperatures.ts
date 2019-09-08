
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { Seasons } from "./Seasons";

export namespace BattlefieldTemperatures {
  export const KEY = new CollectionKey("battlefield_temperatures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _climate: string;
    readonly _season: string;
    readonly temperature: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._climate = values["climate"];
      this._season = values["season"];
      this.temperature = values["temperature"];
    }
    
    get climate(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climate);
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
  }
}

export default BattlefieldTemperatures;
