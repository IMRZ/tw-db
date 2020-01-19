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
        get entityType(): AudioEntityTypes.Entry | undefined;
        get situation(): AudioGroupSoundSituations.Entry | undefined;
        get ability(): AudioAbilities.Entry | undefined;
        get groupSound(): AudioGroupSounds.Entry | undefined;
    }
}
export default AudioGroupSoundAssignments;
