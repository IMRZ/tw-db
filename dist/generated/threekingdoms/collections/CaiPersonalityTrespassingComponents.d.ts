import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityTrespassingComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly unknownFactionModifier: number;
        readonly minScore: number;
        readonly minScoreHorde: number;
        readonly stanceModBestFriends: number;
        readonly stanceModVeryFriendly: number;
        readonly stanceModFriendly: number;
        readonly stanceModNeutral: number;
        readonly stanceModUnfriendly: number;
        readonly stanceModVeryUnfriendly: number;
        readonly stanceModBitterEnemies: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityTrespassingComponents;
