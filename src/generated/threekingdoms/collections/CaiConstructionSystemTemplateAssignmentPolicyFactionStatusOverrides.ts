
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemProvinceTemplateAssignmentPolicies } from "./CaiConstructionSystemProvinceTemplateAssignmentPolicies";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiConstructionSystemTemplateAssignmentSchemes } from "./CaiConstructionSystemTemplateAssignmentSchemes";

export namespace CaiConstructionSystemTemplateAssignmentPolicyFactionStatusOverrides {
  export const KEY = new CollectionKey("cai_construction_system_template_assignment_policy_faction_status_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _templateAssignmentPolicy: string;
    readonly _factionStatus: string;
    readonly _templateAssignmentScheme: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._templateAssignmentPolicy = values["template_assignment_policy"];
      this._factionStatus = values["faction_status"];
      this._templateAssignmentScheme = values["template_assignment_scheme"];
    }
    
    get templateAssignmentPolicy(): CaiConstructionSystemProvinceTemplateAssignmentPolicies.Entry | undefined {
      const collection = <CaiConstructionSystemProvinceTemplateAssignmentPolicies.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemProvinceTemplateAssignmentPolicies.KEY, CaiConstructionSystemProvinceTemplateAssignmentPolicies.Entry);
      return collection.find(entry => entry.key === this._templateAssignmentPolicy);
    }
    
    get factionStatus(): CaiFactionStatuses.Entry | undefined {
      const collection = <CaiFactionStatuses.Entry[]>this.collectionCache.getCollection(CaiFactionStatuses.KEY, CaiFactionStatuses.Entry);
      return collection.find(entry => entry.factionStatus === this._factionStatus);
    }
    
    get templateAssignmentScheme(): CaiConstructionSystemTemplateAssignmentSchemes.Entry | undefined {
      const collection = <CaiConstructionSystemTemplateAssignmentSchemes.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplateAssignmentSchemes.KEY, CaiConstructionSystemTemplateAssignmentSchemes.Entry);
      return collection.find(entry => entry.schemeKey === this._templateAssignmentScheme);
    }
  }
}

export default CaiConstructionSystemTemplateAssignmentPolicyFactionStatusOverrides;
