import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggers } from "./CharacterRelationshipTriggers";
import { CharacterRelationshipEffects } from "./CharacterRelationshipEffects";
export declare namespace CharacterRelationshipTriggerEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _trigger: string;
        readonly _effect: string;
        constructor(collectionCache: CollectionCache, values: any);
        get trigger(): CharacterRelationshipTriggers.Entry | undefined;
        get effect(): CharacterRelationshipEffects.Entry | undefined;
    }
}
export default CharacterRelationshipTriggerEffects;
