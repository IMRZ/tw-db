import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityStances } from "./SpecialAbilityStances";
import { AnimationTriggers } from "./AnimationTriggers";
export declare namespace SpecialAbilityAnimations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stance: string;
        readonly _trigger: string;
        readonly fullbody: boolean;
        readonly spliced: boolean;
        readonly infantry: boolean;
        readonly cavalry: boolean;
        readonly _enemyReaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get stance(): SpecialAbilityStances.Entry | undefined;
        get trigger(): AnimationTriggers.Entry | undefined;
        get enemyReaction(): AnimationTriggers.Entry | undefined;
    }
}
export default SpecialAbilityAnimations;
