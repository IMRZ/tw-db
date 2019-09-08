import { CollectionCache, CollectionKey } from "../../../common";
import { CaiConstructionSystemCategoryGroups } from "./CaiConstructionSystemCategoryGroups";
import { CdirMilitaryGeneratorUnitGroups } from "./CdirMilitaryGeneratorUnitGroups";
export declare namespace CaiConstructionSystemCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _caiConstructionSystemCategoryGroup: string;
        readonly _cdirMilitaryGeneratorUnitGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly caiConstructionSystemCategoryGroup: CaiConstructionSystemCategoryGroups.Entry | undefined;
        readonly cdirMilitaryGeneratorUnitGroup: CdirMilitaryGeneratorUnitGroups.Entry | undefined;
    }
}
export default CaiConstructionSystemCategories;
