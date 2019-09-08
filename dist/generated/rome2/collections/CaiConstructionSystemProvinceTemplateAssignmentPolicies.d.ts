import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";
export declare namespace CaiConstructionSystemProvinceTemplateAssignmentPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _capitalProvinceTemplate: string;
        readonly _militaryProvinceTemplate: string;
        readonly _economicProvinceTemplate: string;
        readonly _militaryPortProvinceTemplate: string;
        readonly _economicPortProvinceTemplate: string;
        readonly nonPortProvinceMilitaryIdealPercentage: number;
        readonly portProvinceMilitaryIdealPercentage: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly capitalProvinceTemplate: CaiConstructionSystemTemplates.Entry | undefined;
        readonly militaryProvinceTemplate: CaiConstructionSystemTemplates.Entry | undefined;
        readonly economicProvinceTemplate: CaiConstructionSystemTemplates.Entry | undefined;
        readonly militaryPortProvinceTemplate: CaiConstructionSystemTemplates.Entry | undefined;
        readonly economicPortProvinceTemplate: CaiConstructionSystemTemplates.Entry | undefined;
    }
}
export default CaiConstructionSystemProvinceTemplateAssignmentPolicies;
