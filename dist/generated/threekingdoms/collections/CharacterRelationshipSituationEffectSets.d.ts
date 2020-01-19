import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterRelationshipSituationEffectSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly loyaltyValue: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterRelationshipSituationEffectSets;
