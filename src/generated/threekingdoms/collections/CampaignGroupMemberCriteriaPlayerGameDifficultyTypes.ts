
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";

export namespace CampaignGroupMemberCriteriaPlayerGameDifficultyTypes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_player_game_difficulty_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _playerGameDifficultyType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._playerGameDifficultyType = values["player_game_difficulty_type"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get playerGameDifficultyType(): PlayerGameDifficultyTypes.Entry | undefined {
      const collection = <PlayerGameDifficultyTypes.Entry[]>this.collectionCache.getCollection(PlayerGameDifficultyTypes.KEY, PlayerGameDifficultyTypes.Entry);
      return collection.find(entry => entry.difficultyType === this._playerGameDifficultyType);
    }
  }
}

export default CampaignGroupMemberCriteriaPlayerGameDifficultyTypes;
