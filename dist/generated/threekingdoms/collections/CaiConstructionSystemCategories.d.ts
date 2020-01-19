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
        get caiConstructionSystemCategoryGroup(): CaiConstructionSystemCategoryGroups.Entry | undefined;
        get cdirMilitaryGeneratorUnitGroup(): CdirMilitaryGeneratorUnitGroups.Entry | undefined;
    }
}
export default CaiConstructionSystemCategories;
