import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingBenefitCategories } from "./BuildingBenefitCategories";
export declare namespace BuildingToBuildingBenefitJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _building: string;
        readonly _benefit: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly building: BuildingLevels.Entry | undefined;
        readonly benefit: BuildingBenefitCategories.Entry | undefined;
    }
}
export default BuildingToBuildingBenefitJunctions;
