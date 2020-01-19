import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMeleeHitTypes } from "./AudioMeleeHitTypes";
export declare namespace AudioShieldTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly switch: string;
        readonly _meleeHitType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get meleeHitType(): AudioMeleeHitTypes.Entry | undefined;
    }
}
export default AudioShieldTypes;
