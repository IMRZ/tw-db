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
        get environment(): AudioBattleEnvironments.Entry | undefined;
        get type(): AudioBattleEnvironmentTypes.Entry | undefined;
        get loop(): AudioBattleEnvironmentLoops.Entry | undefined;
    }
}
export default AudioBattleEnvironmentLoopJunctions;
