import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationships } from "./CharacterRelationships";
import { CharacterRelationshipBasicSituationTypes } from "./CharacterRelationshipBasicSituationTypes";
import { CharacterRelationshipSituationEffectSets } from "./CharacterRelationshipSituationEffectSets";
export declare namespace CharacterRelationshipBasicSituations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _relationship: string;
        readonly _type: string;
        readonly _effects: string;
        constructor(collectionCache: CollectionCache, values: any);
        get relationship(): CharacterRelationships.Entry | undefined;
        get type(): CharacterRelationshipBasicSituationTypes.Entry | undefined;
        get effects(): CharacterRelationshipSituationEffectSets.Entry | undefined;
    }
}
export default CharacterRelationshipBasicSituations;
