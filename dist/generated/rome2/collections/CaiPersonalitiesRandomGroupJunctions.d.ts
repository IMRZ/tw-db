import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesRandomGroups } from "./CaiPersonalitiesRandomGroups";
import { CaiPersonalities } from "./CaiPersonalities";
export declare namespace CaiPersonalitiesRandomGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _randomPersonalityGroupKey: string;
        readonly _personalityKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly randomPersonalityGroupKey: CaiPersonalitiesRandomGroups.Entry | undefined;
        readonly personalityKey: CaiPersonalities.Entry | undefined;
    }
}
export default CaiPersonalitiesRandomGroupJunctions;
