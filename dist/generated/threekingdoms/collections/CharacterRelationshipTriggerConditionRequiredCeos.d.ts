import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipTriggerConditionSets } from "./CharacterRelationshipTriggerConditionSets";
import { Ceos } from "./Ceos";
export declare namespace CharacterRelationshipTriggerConditionRequiredCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _conditionSet: string;
        readonly _requiredCeo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get conditionSet(): CharacterRelationshipTriggerConditionSets.Entry | undefined;
        get requiredCeo(): Ceos.Entry | undefined;
    }
}
export default CharacterRelationshipTriggerConditionRequiredCeos;
