import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityCharacterRoleComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly existingCharacterScoreMultiplier: number;
        readonly softCharacterCapMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityCharacterRoleComponents;
