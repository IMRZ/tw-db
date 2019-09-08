
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesBudgetPolicies } from "./CaiPersonalitiesBudgetPolicies";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiPersonalitiesBudgetAllocations } from "./CaiPersonalitiesBudgetAllocations";

export namespace CaiPersonalitiesBudgetAllocationFactionStatusOverides {
  export const KEY = new CollectionKey("cai_personalities_budget_allocation_faction_status_overides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _budgetAllocationPolicy: string;
    readonly _strategicContext: string;
    readonly _factionStatus: string;
    readonly _budgetAllocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._budgetAllocationPolicy = values["budget_allocation_policy"];
      this._strategicContext = values["strategic_context"];
      this._factionStatus = values["faction_status"];
      this._budgetAllocation = values["budget_allocation"];
    }
    
    get budgetAllocationPolicy(): CaiPersonalitiesBudgetPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetPolicies.KEY, CaiPersonalitiesBudgetPolicies.Entry);
      return collection.find(entry => entry.key === this._budgetAllocationPolicy);
    }
    
    get strategicContext(): CaiStrategicContextTypes.Entry | undefined {
      const collection = <CaiStrategicContextTypes.Entry[]>this.collectionCache.getCollection(CaiStrategicContextTypes.KEY, CaiStrategicContextTypes.Entry);
      return collection.find(entry => entry.key === this._strategicContext);
    }
    
    get factionStatus(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._factionStatus);
    }
    
    get budgetAllocation(): CaiPersonalitiesBudgetAllocations.Entry | undefined {
      const collection = <CaiPersonalitiesBudgetAllocations.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesBudgetAllocations.KEY, CaiPersonalitiesBudgetAllocations.Entry);
      return collection.find(entry => entry.key === this._budgetAllocation);
    }
  }
}

export default CaiPersonalitiesBudgetAllocationFactionStatusOverides;
