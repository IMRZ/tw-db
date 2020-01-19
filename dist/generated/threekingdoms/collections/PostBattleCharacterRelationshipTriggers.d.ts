import { CollectionCache, CollectionKey } from "../../../common";
import { BattleResultTypes } from "./BattleResultTypes";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace PostBattleCharacterRelationshipTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _battleResult: string;
        readonly _triggerSet: string;
        readonly _characterDeathTriggerSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleResult(): BattleResultTypes.Entry | undefined;
        get triggerSet(): CharacterRelationshipTriggerSets.Entry | undefined;
        get characterDeathTriggerSet(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default PostBattleCharacterRelationshipTriggers;
