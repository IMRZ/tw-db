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
        readonly groupMovement: AudioGroupSounds.Entry | undefined;
        readonly groupCollision: AudioGroupSounds.Entry | undefined;
        readonly groupImpact: AudioGroupSounds.Entry | undefined;
        readonly groupMelee: AudioGroupSounds.Entry | undefined;
    }
}
export default AudioArmourTypes;
