
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CcpUnitVsUnitForceMeleeDeltas {
  export const KEY = new CollectionKey("ccp_unit_vs_unit_force_melee_deltas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly attacker: string;
    readonly defender: string;
    readonly cpDeltaVsDefender: number;
    readonly cpDeltaVsAttacker: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.attacker = values["attacker"];
      this.defender = values["defender"];
      this.cpDeltaVsDefender = values["cp_delta_vs_defender"];
      this.cpDeltaVsAttacker = values["cp_delta_vs_attacker"];
    }
    
  }
}

export default CcpUnitVsUnitForceMeleeDeltas;
