
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MinisterialPositions {
  export const KEY = new CollectionKey("ministerial_positions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ministerKey: string;
    readonly rank: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ministerKey = values["minister_key"];
      this.rank = values["rank"];
    }
    
  }
}

export default MinisterialPositions;
