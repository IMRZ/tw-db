
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Seasons {
  export const KEY = new CollectionKey("seasons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly season: string;
    readonly onscreen: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.season = values["season"];
      this.onscreen = values["onscreen"];
      this.order = values["order"];
    }
    
  }
}

export default Seasons;
