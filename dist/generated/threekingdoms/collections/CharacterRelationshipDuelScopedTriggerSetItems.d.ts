import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipDuelScopedTriggerSets } from "./CharacterRelationshipDuelScopedTriggerSets";
import { CharacterRelationshipDuelParticipantScopes } from "./CharacterRelationshipDuelParticipantScopes";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace CharacterRelationshipDuelScopedTriggerSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _duelScopedTriggerSet: string;
        readonly _from: string;
        readonly _to: string;
        readonly _triggers: string;
        constructor(collectionCache: CollectionCache, values: any);
        get duelScopedTriggerSet(): CharacterRelationshipDuelScopedTriggerSets.Entry | undefined;
        get from(): CharacterRelationshipDuelParticipantScopes.Entry | undefined;
        get to(): CharacterRelationshipDuelParticipantScopes.Entry | undefined;
        get triggers(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default CharacterRelationshipDuelScopedTriggerSetItems;
