import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironments } from "./AudioBattleEnvironments";
import { AudioBattleEnvironmentTypes } from "./AudioBattleEnvironmentTypes";
import { AudioBattleEnvironmentLoops } from "./AudioBattleEnvironmentLoops";
export declare namespace AudioBattleEnvironmentLoopJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _environment: string;
        readonly _type: string;
        readonly _loop: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly environment: AudioBattleEnvironments.Entry | undefined;
        readonly type: AudioBattleEnvironmentTypes.Entry | undefined;
        readonly loop: AudioBattleEnvironmentLoops.Entry | undefined;
    }
}
export default AudioBattleEnvironmentLoopJunctions;
