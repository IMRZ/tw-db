import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EncyclopediaTutorialSections {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly section: string;
        readonly name: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EncyclopediaTutorialSections;
