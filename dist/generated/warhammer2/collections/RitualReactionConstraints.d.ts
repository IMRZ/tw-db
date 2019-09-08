import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";
import { RitualCategories } from "./RitualCategories";
export declare namespace RitualReactionConstraints {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ritual: string;
        readonly _targetRitual: string;
        readonly _targetCategory: string;
        readonly oncePerTarget: boolean;
        readonly sameSubcultureValid: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly ritual: Rituals.Entry | undefined;
        readonly targetRitual: Rituals.Entry | undefined;
        readonly targetCategory: RitualCategories.Entry | undefined;
    }
}
export default RitualReactionConstraints;
