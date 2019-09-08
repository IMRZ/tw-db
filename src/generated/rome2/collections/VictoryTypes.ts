
import { CollectionCache, CollectionKey } from "../../../common";


export namespace VictoryTypes {
  export const KEY = new CollectionKey("victory_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly victoryType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.victoryType = values["victory_type"];
    }
    
  }
}

export default VictoryTypes;
