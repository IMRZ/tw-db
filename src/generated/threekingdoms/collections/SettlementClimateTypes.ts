
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementClimateTypes {
  export const KEY = new CollectionKey("settlement_climate_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default SettlementClimateTypes;
