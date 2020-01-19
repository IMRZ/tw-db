import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityGroups } from "./CaiPersonalityGroups";
import { CaiPersonalities } from "./CaiPersonalities";
export declare namespace CaiPersonalityGroupJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _groupKey: string;
        readonly _personalityKey: string;
        readonly startingWeight: number;
        readonly weight1: number;
        readonly turn1: number;
        readonly weight2: number;
        readonly turn2: number;
        readonly weight3: number;
        readonly turn3: number;
        readonly weight4: number;
        readonly turn4: number;
        constructor(collectionCache: CollectionCache, values: any);
        get groupKey(): CaiPersonalityGroups.Entry | undefined;
        get personalityKey(): CaiPersonalities.Entry | undefined;
    }
}
export default CaiPersonalityGroupJunctions;
