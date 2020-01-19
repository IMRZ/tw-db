import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationships } from "./CharacterRelationships";
import { MinisterialPositions } from "./MinisterialPositions";
import { Tristates } from "./Tristates";
export declare namespace CharacterRelationshipTriggerConditionSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _relationship: string;
        readonly minCompatibility: number;
        readonly maxCompatibility: number;
        readonly _ministerialPosition: string;
        readonly _isEnemy: string;
        readonly _isImmediateFamily: string;
        constructor(collectionCache: CollectionCache, values: any);
        get relationship(): CharacterRelationships.Entry | undefined;
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
        get isEnemy(): Tristates.Entry | undefined;
        get isImmediateFamily(): Tristates.Entry | undefined;
    }
}
export default CharacterRelationshipTriggerConditionSets;
