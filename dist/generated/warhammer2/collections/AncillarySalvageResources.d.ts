import { CollectionCache, CollectionKey } from "../../../common";
import { AncillariesCategories } from "./AncillariesCategories";
import { ResourceCosts } from "./ResourceCosts";
export declare namespace AncillarySalvageResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly minUniquenessScore: number;
        readonly _salvageResources: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: AncillariesCategories.Entry | undefined;
        readonly salvageResources: ResourceCosts.Entry | undefined;
    }
}
export default AncillarySalvageResources;
