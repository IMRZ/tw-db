
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CcpSituationDeltas {
  export const KEY = new CollectionKey("ccp_situation_deltas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly attacker: string;
    readonly defender: string;
    readonly flankingDelta: number;
    readonly forestDelta: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.attacker = values["attacker"];
      this.defender = values["defender"];
      this.flankingDelta = values["flanking_delta"];
      this.forestDelta = values["forest_delta"];
    }
    
  }
}

export default CcpSituationDeltas;
