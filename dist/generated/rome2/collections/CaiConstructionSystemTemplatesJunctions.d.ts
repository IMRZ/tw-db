import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemTemplates } from "./CaiConstructionSystemTemplates";
import { CaiConstructionSystemCategories } from "./CaiConstructionSystemCategories";
import { CaiConstructionSystemCategoryGroups } from "./CaiConstructionSystemCategoryGroups";
export declare namespace CaiConstructionSystemTemplatesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _caiConstructionSystemTemplate: string;
        readonly _caiConstructionSystemCategory: string;
        readonly _caiConstructionSystemCategoryGroup: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get caiConstructionSystemTemplate(): CaiConstructionSystemTemplates.Entry | undefined;
        get caiConstructionSystemCategory(): CaiConstructionSystemCategories.Entry | undefined;
        get caiConstructionSystemCategoryGroup(): CaiConstructionSystemCategoryGroups.Entry | undefined;
    }
}
export default CaiConstructionSystemTemplatesJunctions;
