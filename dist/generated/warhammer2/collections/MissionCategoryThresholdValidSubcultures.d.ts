import { CollectionCache, CollectionKey } from "../../../common";
import { MissionCategoryThresholds } from "./MissionCategoryThresholds";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace MissionCategoryThresholdValidSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _threshold: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly threshold: MissionCategoryThresholds.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
    }
}
export default MissionCategoryThresholdValidSubcultures;
