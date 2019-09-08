
import { CollectionCache, CollectionKey } from "../../../common";
import { RandomLocalisationStrings } from "./RandomLocalisationStrings";

export namespace StatsClans {
  export const KEY = new CollectionKey("stats_clans");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly public: boolean;
    readonly _label: string;
    readonly ladder: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.public = !!values["public"];
      this._label = values["label"];
      this.ladder = !!values["ladder"];
    }
    
    get label(): RandomLocalisationStrings.Entry | undefined {
      const collection = <RandomLocalisationStrings.Entry[]>this.collectionCache.getCollection(RandomLocalisationStrings.KEY, RandomLocalisationStrings.Entry);
      return collection.find(entry => entry.key === this._label);
    }
  }
}

export default StatsClans;
