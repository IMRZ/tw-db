import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";
export declare namespace CaiConstructionSystemTemplateAssignmentSchemes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly schemeKey: string;
        readonly _capitalTemplate: string;
        readonly _basicMilitaryTemplate: string;
        readonly _basicEconomicTemplate: string;
        readonly basicIdealMilitaryTemplatePercentage: number;
        readonly _navalMilitaryTemplate: string;
        readonly _navalEconomicTemplate: string;
        readonly navalIdealMilitaryTemplatePercentage: number;
        constructor(collectionCache: CollectionCache, values: any);
        get capitalTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get basicMilitaryTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get basicEconomicTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get navalMilitaryTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get navalEconomicTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
    }
}
export default CaiConstructionSystemTemplateAssignmentSchemes;
