import { CollectionCache, CollectionKey } from "../../../common";
import { BattleDuelOutcomes } from "./BattleDuelOutcomes";
import { BattleDuelWithdrawReasons } from "./BattleDuelWithdrawReasons";
import { CharacterRelationshipDuelScopedTriggerSets } from "./CharacterRelationshipDuelScopedTriggerSets";
export declare namespace CharacterRelationshipDuelTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _duelOutcome: string;
        readonly _loserWithdrawReason: string;
        readonly _triggers: string;
        constructor(collectionCache: CollectionCache, values: any);
        get duelOutcome(): BattleDuelOutcomes.Entry | undefined;
        get loserWithdrawReason(): BattleDuelWithdrawReasons.Entry | undefined;
        get triggers(): CharacterRelationshipDuelScopedTriggerSets.Entry | undefined;
    }
}
export default CharacterRelationshipDuelTriggers;
