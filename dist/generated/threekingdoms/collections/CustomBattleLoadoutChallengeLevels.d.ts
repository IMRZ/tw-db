import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CustomBattleLoadoutChallengeLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CustomBattleLoadoutChallengeLevels;
