
import { CollectionCache, CollectionKey } from "../../../common";
import { NakaiTempleLevels } from "./NakaiTempleLevels";
import { Rituals } from "./Rituals";

export namespace RitualsToNakaiTempleLevels {
  export const KEY = new CollectionKey("rituals_to_nakai_temple_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _ritual: string;
    readonly sort: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._ritual = values["ritual"];
      this.sort = values["sort"];
    }
    
    get key(): NakaiTempleLevels.Entry | undefined {
      const collection = <NakaiTempleLevels.Entry[]>this.collectionCache.getCollection(NakaiTempleLevels.KEY, NakaiTempleLevels.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get ritual(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritual);
    }
  }
}

export default RitualsToNakaiTempleLevels;
