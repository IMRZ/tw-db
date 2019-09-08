
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionPolicies } from "./CaiPersonalityOccupationDecisionPolicies";

export namespace CaiPersonalityOccupationDecisionPriorities {
  export const KEY = new CollectionKey("cai_personality_occupation_decision_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _policyId: string;
    readonly option: string;
    readonly lastStandPriority: number;
    readonly totalWarPriority: number;
    readonly warPriority: number;
    readonly tensionPriority: number;
    readonly peacePriority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._policyId = values["policy_id"];
      this.option = values["option"];
      this.lastStandPriority = values["last_stand_priority"];
      this.totalWarPriority = values["total_war_priority"];
      this.warPriority = values["war_priority"];
      this.tensionPriority = values["tension_priority"];
      this.peacePriority = values["peace_priority"];
    }
    
    get policyId(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionPolicies.KEY, CaiPersonalityOccupationDecisionPolicies.Entry);
      return collection.find(entry => entry.id === this._policyId);
    }
  }
}

export default CaiPersonalityOccupationDecisionPriorities;
