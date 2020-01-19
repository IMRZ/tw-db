import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";
import { AudioMeleeHitTypes } from "./AudioMeleeHitTypes";
export declare namespace AudioMeleeWeaponTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly switch: string;
        readonly _groupMelee: string;
        readonly cannotParry: boolean;
        readonly _meleeHitType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get groupMelee(): AudioGroupSounds.Entry | undefined;
        get meleeHitType(): AudioMeleeHitTypes.Entry | undefined;
    }
}
export default AudioMeleeWeaponTypes;
