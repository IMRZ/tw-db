import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterRelationshipEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly value: number;
        readonly duration: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterRelationshipEffects;
