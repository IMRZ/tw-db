import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironments } from "./AudioBattleEnvironments";
import { AudioBattleEnvironmentTypes } from "./AudioBattleEnvironmentTypes";
import { AudioBattleEnvironmentOneShots } from "./AudioBattleEnvironmentOneShots";
export declare namespace AudioBattleEnvironmentOneShotJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _environment: string;
        readonly _type: string;
        readonly _oneShot: string;
        constructor(collectionCache: CollectionCache, values: any);
        get environment(): AudioBattleEnvironments.Entry | undefined;
        get type(): AudioBattleEnvironmentTypes.Entry | undefined;
        get oneShot(): AudioBattleEnvironmentOneShots.Entry | undefined;
    }
}
export default AudioBattleEnvironmentOneShotJunctions;
