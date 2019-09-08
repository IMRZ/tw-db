import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsCategories } from "./CdirEventsCategories";
import { EffectBundles } from "./EffectBundles";
export declare namespace MissionCategoryThresholds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly name: string;
        readonly _category: string;
        readonly _effectBundle: string;
        readonly thresholdWeight: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: CdirEventsCategories.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
    }
}
export default MissionCategoryThresholds;
