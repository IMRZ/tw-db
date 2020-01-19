import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterRelationshipMemories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedDescription: string;
        readonly localisedDescriptionTargetCharacter: string;
        readonly directional: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterRelationshipMemories;
