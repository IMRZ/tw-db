
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemStrategicContextTemplatePolicies } from "./CaiConstructionSystemStrategicContextTemplatePolicies";
import { CaiConstructionSystemProvinceTemplateAssignmentPolicies } from "./CaiConstructionSystemProvinceTemplateAssignmentPolicies";
import { CaiConstructionSystemSynergyPolicies } from "./CaiConstructionSystemSynergyPolicies";

export namespace CaiPersonalitiesConstructionSystemPolicies {
  export const KEY = new CollectionKey("cai_personalities_construction_system_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _strategicContextTemplateAssignmentPolicy: string;
    readonly _provinceSpecialisationTemplateAssignmentPolicy: string;
    readonly _buildingSynergiesPolicy: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._strategicContextTemplateAssignmentPolicy = values["strategic_context_template_assignment_policy"];
      this._provinceSpecialisationTemplateAssignmentPolicy = values["province_specialisation_template_assignment_policy"];
      this._buildingSynergiesPolicy = values["building_synergies_policy"];
    }
    
    get strategicContextTemplateAssignmentPolicy(): CaiConstructionSystemStrategicContextTemplatePolicies.Entry | undefined {
      const collection = <CaiConstructionSystemStrategicContextTemplatePolicies.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemStrategicContextTemplatePolicies.KEY, CaiConstructionSystemStrategicContextTemplatePolicies.Entry);
      return collection.find(entry => entry.key === this._strategicContextTemplateAssignmentPolicy);
    }
    
    get provinceSpecialisationTemplateAssignmentPolicy(): CaiConstructionSystemProvinceTemplateAssignmentPolicies.Entry | undefined {
      const collection = <CaiConstructionSystemProvinceTemplateAssignmentPolicies.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemProvinceTemplateAssignmentPolicies.KEY, CaiConstructionSystemProvinceTemplateAssignmentPolicies.Entry);
      return collection.find(entry => entry.key === this._provinceSpecialisationTemplateAssignmentPolicy);
    }
    
    get buildingSynergiesPolicy(): CaiConstructionSystemSynergyPolicies.Entry | undefined {
      const collection = <CaiConstructionSystemSynergyPolicies.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemSynergyPolicies.KEY, CaiConstructionSystemSynergyPolicies.Entry);
      return collection.find(entry => entry.key === this._buildingSynergiesPolicy);
    }
  }
}

export default CaiPersonalitiesConstructionSystemPolicies;
