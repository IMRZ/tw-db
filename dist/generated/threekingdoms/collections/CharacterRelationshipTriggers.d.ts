import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerConditionSets } from "./CharacterRelationshipTriggerConditionSets";
import { CharacterRelationshipMemories } from "./CharacterRelationshipMemories";
export declare namespace CharacterRelationshipTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _conditions: string;
        readonly _memory: string;
        readonly memoryRelevancyDecayPerTurn: number;
        constructor(collectionCache: CollectionCache, values: any);
        get conditions(): CharacterRelationshipTriggerConditionSets.Entry | undefined;
        get memory(): CharacterRelationshipMemories.Entry | undefined;
    }
}
export default CharacterRelationshipTriggers;
