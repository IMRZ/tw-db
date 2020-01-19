
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TreasuryLevels {
  export const KEY = new CollectionKey("treasury_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.value = values["value"];
    }
    
  }
}

export default TreasuryLevels;
