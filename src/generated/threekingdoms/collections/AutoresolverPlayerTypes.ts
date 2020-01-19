
import { CollectionCache, CollectionKey } from "../../../common";
import { AutoresolverOptionalBoolEnums } from "./AutoresolverOptionalBoolEnums";
import { AutoresolverDifficultyLevelEnums } from "./AutoresolverDifficultyLevelEnums";

export namespace AutoresolverPlayerTypes {
  export const KEY = new CollectionKey("autoresolver_player_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly ifPlayerIsAttacker: boolean;
    readonly ifPlayerIsDefender: boolean;
    readonly _playerIsHuman: string;
    readonly _playerCampaignDifficulty: string;
    readonly _enemyPlayerIsHuman: string;
    readonly _enemyPlayerCampaignDifficulty: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.ifPlayerIsAttacker = !!values["if_player_is_attacker"];
      this.ifPlayerIsDefender = !!values["if_player_is_defender"];
      this._playerIsHuman = values["player_is_human"];
      this._playerCampaignDifficulty = values["player_campaign_difficulty"];
      this._enemyPlayerIsHuman = values["enemy_player_is_human"];
      this._enemyPlayerCampaignDifficulty = values["enemy_player_campaign_difficulty"];
    }
    
    get playerIsHuman(): AutoresolverOptionalBoolEnums.Entry | undefined {
      const collection = <AutoresolverOptionalBoolEnums.Entry[]>this.collectionCache.getCollection(AutoresolverOptionalBoolEnums.KEY, AutoresolverOptionalBoolEnums.Entry);
      return collection.find(entry => entry.key === this._playerIsHuman);
    }
    
    get playerCampaignDifficulty(): AutoresolverDifficultyLevelEnums.Entry | undefined {
      const collection = <AutoresolverDifficultyLevelEnums.Entry[]>this.collectionCache.getCollection(AutoresolverDifficultyLevelEnums.KEY, AutoresolverDifficultyLevelEnums.Entry);
      return collection.find(entry => entry.key === this._playerCampaignDifficulty);
    }
    
    get enemyPlayerIsHuman(): AutoresolverOptionalBoolEnums.Entry | undefined {
      const collection = <AutoresolverOptionalBoolEnums.Entry[]>this.collectionCache.getCollection(AutoresolverOptionalBoolEnums.KEY, AutoresolverOptionalBoolEnums.Entry);
      return collection.find(entry => entry.key === this._enemyPlayerIsHuman);
    }
    
    get enemyPlayerCampaignDifficulty(): AutoresolverDifficultyLevelEnums.Entry | undefined {
      const collection = <AutoresolverDifficultyLevelEnums.Entry[]>this.collectionCache.getCollection(AutoresolverDifficultyLevelEnums.KEY, AutoresolverDifficultyLevelEnums.Entry);
      return collection.find(entry => entry.key === this._enemyPlayerCampaignDifficulty);
    }
  }
}

export default AutoresolverPlayerTypes;
