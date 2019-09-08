
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplateAssignmentSchemes } from "./CaiConstructionSystemTemplateAssignmentSchemes";

export namespace CaiConstructionSystemProvinceTemplateAssignmentPolicies {
  export const KEY = new CollectionKey("cai_construction_system_province_template_assignment_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _defaultTemplateAssignmentScheme: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._defaultTemplateAssignmentScheme = values["default_template_assignment_scheme"];
    }
    
    get defaultTemplateAssignmentScheme(): CaiConstructionSystemTemplateAssignmentSchemes.Entry | undefined {
      const collection = <CaiConstructionSystemTemplateAssignmentSchemes.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemTemplateAssignmentSchemes.KEY, CaiConstructionSystemTemplateAssignmentSchemes.Entry);
      return collection.find(entry => entry.schemeKey === this._defaultTemplateAssignmentScheme);
    }
  }
}

export default CaiConstructionSystemProvinceTemplateAssignmentPolicies;
