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
        get playerIsHuman(): AutoresolverOptionalBoolEnums.Entry | undefined;
        get playerCampaignDifficulty(): AutoresolverDifficultyLevelEnums.Entry | undefined;
        get enemyPlayerIsHuman(): AutoresolverOptionalBoolEnums.Entry | undefined;
        get enemyPlayerCampaignDifficulty(): AutoresolverDifficultyLevelEnums.Entry | undefined;
    }
}
export default AutoresolverPlayerTypes;
