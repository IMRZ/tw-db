import { CollectionCache, CollectionKey } from "../../../common";
import { AutoresolverOptionalBoolEnums } from "./AutoresolverOptionalBoolEnums";
import { AutoresolverDifficultyLevelEnums } from "./AutoresolverDifficultyLevelEnums";
export declare namespace AutoresolverPlayerTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly ifPlayerIsAttacker: boolean;
        readonly ifPlayerIsDefender: boolean;
        readonly _playerIsHuman: string;
        readonly _playerCampaignDifficulty: string;
        readonly _enemyPlayerIsHuman: string;
        readonly _enemyPlayerCampaignDifficulty: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly playerIsHuman: AutoresolverOptionalBoolEnums.Entry | undefined;
        readonly playerCampaignDifficulty: AutoresolverDifficultyLevelEnums.Entry | undefined;
        readonly enemyPlayerIsHuman: AutoresolverOptionalBoolEnums.Entry | undefined;
        readonly enemyPlayerCampaignDifficulty: AutoresolverDifficultyLevelEnums.Entry | undefined;
    }
}
export default AutoresolverPlayerTypes;
