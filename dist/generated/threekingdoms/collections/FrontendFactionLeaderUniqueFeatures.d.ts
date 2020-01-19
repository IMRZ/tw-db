import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaderUniqueFeatureTypes } from "./FrontendFactionLeaderUniqueFeatureTypes";
export declare namespace FrontendFactionLeaderUniqueFeatures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly iconPath: string;
        readonly localisedDescription: string;
        readonly _featureType: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        get featureType(): FrontendFactionLeaderUniqueFeatureTypes.Entry | undefined;
    }
}
export default FrontendFactionLeaderUniqueFeatures;
