import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
import { CharacterRelationshipTriggers } from "./CharacterRelationshipTriggers";
import { CharacterRelationshipTriggerTargetTypes } from "./CharacterRelationshipTriggerTargetTypes";
import { CharacterRelationshipTriggerConditionSets } from "./CharacterRelationshipTriggerConditionSets";
export declare namespace CharacterRelationshipTriggerSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly _trigger: string;
        readonly _target: string;
        readonly _senderToReceiverConditions: string;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): CharacterRelationshipTriggerSets.Entry | undefined;
        get trigger(): CharacterRelationshipTriggers.Entry | undefined;
        get target(): CharacterRelationshipTriggerTargetTypes.Entry | undefined;
        get senderToReceiverConditions(): CharacterRelationshipTriggerConditionSets.Entry | undefined;
    }
}
export default CharacterRelationshipTriggerSetItems;
