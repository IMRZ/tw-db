
import { CollectionCache, CollectionKey } from "../../../common";


export namespace VictoryConditions {
  export const KEY = new CollectionKey("victory_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly condition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.condition = values["condition"];
    }
    
  }
}

export default VictoryConditions;
