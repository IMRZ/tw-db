
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitNavalArtilleryPositions {
  export const KEY = new CollectionKey("unit_naval_artillery_positions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitNavalArtilleryPositions;
