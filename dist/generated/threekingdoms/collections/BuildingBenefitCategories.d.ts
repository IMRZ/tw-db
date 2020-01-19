import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingBenefitCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly onscreenDescription: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingBenefitCategories;
