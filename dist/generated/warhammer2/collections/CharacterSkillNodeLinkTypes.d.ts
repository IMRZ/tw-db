import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterSkillNodeLinkTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly linkType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterSkillNodeLinkTypes;
