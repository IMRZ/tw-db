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
        readonly capitalTemplate: CaiConstructionSystemTemplates.Entry | undefined;
        readonly basicMilitaryTemplate: CaiConstructionSystemTemplates.Entry | undefined;
        readonly basicEconomicTemplate: CaiConstructionSystemTemplates.Entry | undefined;
        readonly navalMilitaryTemplate: CaiConstructionSystemTemplates.Entry | undefined;
        readonly navalEconomicTemplate: CaiConstructionSystemTemplates.Entry | undefined;
    }
}
export default CaiConstructionSystemTemplateAssignmentSchemes;
