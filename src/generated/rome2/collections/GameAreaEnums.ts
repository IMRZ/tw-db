
import { CollectionCache, CollectionKey } from "../../../common";


export namespace GameAreaEnums {
  export const KEY = new CollectionKey("game_area_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default GameAreaEnums;
