import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioMeleeHitTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly switch: string;
        readonly cannotHitWeapons: boolean;
        readonly cannotHitShields: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioMeleeHitTypes;
