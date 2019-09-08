import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironments } from "./AudioBattleEnvironments";
import { AudioBattleEnvironmentReverbTypes } from "./AudioBattleEnvironmentReverbTypes";
import { AudioBattleEnvironmentReverbs } from "./AudioBattleEnvironmentReverbs";
export declare namespace AudioBattleEnvironmentReverbJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _environment: string;
        readonly _type: string;
        readonly _reverb: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly environment: AudioBattleEnvironments.Entry | undefined;
        readonly type: AudioBattleEnvironmentReverbTypes.Entry | undefined;
        readonly reverb: AudioBattleEnvironmentReverbs.Entry | undefined;
    }
}
export default AudioBattleEnvironmentReverbJunctions;
