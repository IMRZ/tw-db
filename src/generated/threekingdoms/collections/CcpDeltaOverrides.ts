
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace CcpDeltaOverrides {
  export const KEY = new CollectionKey("ccp_delta_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _attacker: string;
    readonly _defender: string;
    readonly isRangedInMeleeResult: boolean;
    readonly cpDeltaOverrideVsDefender: number;
    readonly cpDeltaOverrideVsAttacker: number;
    readonly overridesApplyToAutoresolverOnly: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._attacker = values["attacker"];
      this._defender = values["defender"];
      this.isRangedInMeleeResult = !!values["is_ranged_in_melee_result"];
      this.cpDeltaOverrideVsDefender = values["cp_delta_override_vs_defender"];
      this.cpDeltaOverrideVsAttacker = values["cp_delta_override_vs_attacker"];
      this.overridesApplyToAutoresolverOnly = !!values["overrides_apply_to_autoresolver_only"];
    }
    
    get attacker(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._attacker);
    }
    
    get defender(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._defender);
    }
  }
}

export default CcpDeltaOverrides;
