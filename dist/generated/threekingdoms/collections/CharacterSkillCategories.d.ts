import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterSkillCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minIndent: number;
        readonly maxIndent: number;
        readonly order: number;
        readonly colR: number;
        readonly colG: number;
        readonly colB: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterSkillCategories;
