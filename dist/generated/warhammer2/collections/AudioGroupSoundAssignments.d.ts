import { CollectionCache, CollectionKey } from "../../../common";
import { AudioEntityTypes } from "./AudioEntityTypes";
import { AudioGroupSoundSituations } from "./AudioGroupSoundSituations";
import { AudioAbilities } from "./AudioAbilities";
import { AudioGroupSounds } from "./AudioGroupSounds";
export declare namespace AudioGroupSoundAssignments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _entityType: string;
        readonly _situation: string;
        readonly _ability: string;
        readonly _groupSound: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly entityType: AudioEntityTypes.Entry | undefined;
        readonly situation: AudioGroupSoundSituations.Entry | undefined;
        readonly ability: AudioAbilities.Entry | undefined;
        readonly groupSound: AudioGroupSounds.Entry | undefined;
    }
}
export default AudioGroupSoundAssignments;
