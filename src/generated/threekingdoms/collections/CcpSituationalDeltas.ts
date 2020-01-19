
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CcpSituationalDeltas {
  export const KEY = new CollectionKey("ccp_situational_deltas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly unitName: string;
    readonly flankingDelta: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.unitName = values["unit_name"];
      this.flankingDelta = values["flanking_delta"];
    }
    
  }
}

export default CcpSituationalDeltas;
