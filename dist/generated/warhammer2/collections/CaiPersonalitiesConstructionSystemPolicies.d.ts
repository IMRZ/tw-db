import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemStrategicContextTemplatePolicies } from "./CaiConstructionSystemStrategicContextTemplatePolicies";
import { CaiConstructionSystemProvinceTemplateAssignmentPolicies } from "./CaiConstructionSystemProvinceTemplateAssignmentPolicies";
import { CaiConstructionSystemSynergyPolicies } from "./CaiConstructionSystemSynergyPolicies";
export declare namespace CaiPersonalitiesConstructionSystemPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _strategicContextTemplateAssignmentPolicy: string;
        readonly _provinceSpecialisationTemplateAssignmentPolicy: string;
        readonly _buildingSynergiesPolicy: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly strategicContextTemplateAssignmentPolicy: CaiConstructionSystemStrategicContextTemplatePolicies.Entry | undefined;
        readonly provinceSpecialisationTemplateAssignmentPolicy: CaiConstructionSystemProvinceTemplateAssignmentPolicies.Entry | undefined;
        readonly buildingSynergiesPolicy: CaiConstructionSystemSynergyPolicies.Entry | undefined;
    }
}
export default CaiPersonalitiesConstructionSystemPolicies;
