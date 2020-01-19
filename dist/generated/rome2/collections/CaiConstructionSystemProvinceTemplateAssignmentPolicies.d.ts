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
        get capitalProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get militaryProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get economicProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get militaryPortProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get economicPortProvinceTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
    }
}
export default CaiConstructionSystemProvinceTemplateAssignmentPolicies;
