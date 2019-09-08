import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemProvinceTemplateAssignmentPolicies } from "./CaiConstructionSystemProvinceTemplateAssignmentPolicies";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiConstructionSystemTemplateAssignmentSchemes } from "./CaiConstructionSystemTemplateAssignmentSchemes";
export declare namespace CaiConstructionSystemTemplateAssignmentPolicyFactionStatusOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _templateAssignmentPolicy: string;
        readonly _factionStatus: string;
        readonly _templateAssignmentScheme: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly templateAssignmentPolicy: CaiConstructionSystemProvinceTemplateAssignmentPolicies.Entry | undefined;
        readonly factionStatus: CaiFactionStatuses.Entry | undefined;
        readonly templateAssignmentScheme: CaiConstructionSystemTemplateAssignmentSchemes.Entry | undefined;
    }
}
export default CaiConstructionSystemTemplateAssignmentPolicyFactionStatusOverrides;
