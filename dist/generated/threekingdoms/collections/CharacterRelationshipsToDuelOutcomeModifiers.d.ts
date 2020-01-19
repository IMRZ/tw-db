import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationships } from "./CharacterRelationships";
export declare namespace CharacterRelationshipsToDuelOutcomeModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _relationshipKey: string;
        readonly spareKillModifier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get relationshipKey(): CharacterRelationships.Entry | undefined;
    }
}
export default CharacterRelationshipsToDuelOutcomeModifiers;
