import { CollectionCache, CollectionKey } from "../../../common";
import { FactionFeatureSetMilitaryForceTypes } from "./FactionFeatureSetMilitaryForceTypes";
export declare namespace FeatureSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly priority: number;
        readonly _militaryForceTypes: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly militaryForceTypes: FactionFeatureSetMilitaryForceTypes.Entry | undefined;
    }
}
export default FeatureSets;
