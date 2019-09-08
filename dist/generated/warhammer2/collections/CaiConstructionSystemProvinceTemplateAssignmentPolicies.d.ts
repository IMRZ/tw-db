import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplateAssignmentSchemes } from "./CaiConstructionSystemTemplateAssignmentSchemes";
export declare namespace CaiConstructionSystemProvinceTemplateAssignmentPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _defaultTemplateAssignmentScheme: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly defaultTemplateAssignmentScheme: CaiConstructionSystemTemplateAssignmentSchemes.Entry | undefined;
    }
}
export default CaiConstructionSystemProvinceTemplateAssignmentPolicies;
