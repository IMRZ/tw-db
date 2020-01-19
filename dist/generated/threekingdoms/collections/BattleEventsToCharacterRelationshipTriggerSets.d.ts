import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace BattleEventsToCharacterRelationshipTriggerSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly battleEvent: string;
        readonly _characterRelationshipTriggerSets: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterRelationshipTriggerSets(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default BattleEventsToCharacterRelationshipTriggerSets;
