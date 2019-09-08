
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityOccupationDecisionPolicies } from "./CaiPersonalityOccupationDecisionPolicies";

export namespace CaiPersonalityOccupationDecisionComponents {
  export const KEY = new CollectionKey("cai_personality_occupation_decision_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _policySuitable: string;
    readonly _policyUnsuitable: string;
    readonly _policyUninhabitable: string;
    readonly _policyUncapturable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._policySuitable = values["policy_suitable"];
      this._policyUnsuitable = values["policy_unsuitable"];
      this._policyUninhabitable = values["policy_uninhabitable"];
      this._policyUncapturable = values["policy_uncapturable"];
    }
    
    get policySuitable(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionPolicies.KEY, CaiPersonalityOccupationDecisionPolicies.Entry);
      return collection.find(entry => entry.id === this._policySuitable);
    }
    
    get policyUnsuitable(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionPolicies.KEY, CaiPersonalityOccupationDecisionPolicies.Entry);
      return collection.find(entry => entry.id === this._policyUnsuitable);
    }
    
    get policyUninhabitable(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionPolicies.KEY, CaiPersonalityOccupationDecisionPolicies.Entry);
      return collection.find(entry => entry.id === this._policyUninhabitable);
    }
    
    get policyUncapturable(): CaiPersonalityOccupationDecisionPolicies.Entry | undefined {
      const collection = <CaiPersonalityOccupationDecisionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalityOccupationDecisionPolicies.KEY, CaiPersonalityOccupationDecisionPolicies.Entry);
      return collection.find(entry => entry.id === this._policyUncapturable);
    }
  }
}

export default CaiPersonalityOccupationDecisionComponents;
