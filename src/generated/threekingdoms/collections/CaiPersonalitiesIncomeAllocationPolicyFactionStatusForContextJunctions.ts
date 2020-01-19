
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesIncomeAllocationPolicies } from "./CaiPersonalitiesIncomeAllocationPolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiPersonalitiesIncomeAllocations } from "./CaiPersonalitiesIncomeAllocations";

export namespace CaiPersonalitiesIncomeAllocationPolicyFactionStatusForContextJunctions {
  export const KEY = new CollectionKey("cai_personalities_income_allocation_policy_faction_status_for_context_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _incomeAllocationPolicy: string;
    readonly _strategicContext: string;
    readonly _factionStatus: string;
    readonly _incomeAllocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._incomeAllocationPolicy = values["income_allocation_policy"];
      this._strategicContext = values["strategic_context"];
      this._factionStatus = values["faction_status"];
      this._incomeAllocation = values["income_allocation"];
    }
    
    get incomeAllocationPolicy(): CaiPersonalitiesIncomeAllocationPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesIncomeAllocationPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesIncomeAllocationPolicies.KEY, CaiPersonalitiesIncomeAllocationPolicies.Entry);
      return collection.find(entry => entry.key === this._incomeAllocationPolicy);
    }
    
    get strategicContext(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._strategicContext);
    }
    
    get factionStatus(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._factionStatus);
    }
    
    get incomeAllocation(): CaiPersonalitiesIncomeAllocations.Entry | undefined {
      const collection = <CaiPersonalitiesIncomeAllocations.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesIncomeAllocations.KEY, CaiPersonalitiesIncomeAllocations.Entry);
      return collection.find(entry => entry.key === this._incomeAllocation);
    }
  }
}

export default CaiPersonalitiesIncomeAllocationPolicyFactionStatusForContextJunctions;
