
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SubcultureSettlementOccupationSuitabilityTypes {
  export const KEY = new CollectionKey("subculture_settlement_occupation_suitability_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly suitability: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.suitability = values["suitability"];
    }
    
  }
}

export default SubcultureSettlementOccupationSuitabilityTypes;
