import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";
export declare namespace AudioArmourTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly switch: string;
        readonly _groupMovement: string;
        readonly _groupCollision: string;
        readonly _groupImpact: string;
        readonly _groupMelee: string;
        constructor(collectionCache: CollectionCache, values: any);
        get groupMovement(): AudioGroupSounds.Entry | undefined;
        get groupCollision(): AudioGroupSounds.Entry | undefined;
        get groupImpact(): AudioGroupSounds.Entry | undefined;
        get groupMelee(): AudioGroupSounds.Entry | undefined;
    }
}
export default AudioArmourTypes;
