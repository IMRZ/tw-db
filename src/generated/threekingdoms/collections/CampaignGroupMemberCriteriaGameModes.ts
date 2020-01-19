
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { GameModes } from "./GameModes";

export namespace CampaignGroupMemberCriteriaGameModes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_game_modes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _gameMode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._gameMode = values["game_mode"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get gameMode(): GameModes.Entry | undefined {
      const collection = <GameModes.Entry[]>this.collectionCache.getCollection(GameModes.KEY, GameModes.Entry);
      return collection.find(entry => entry.key === this._gameMode);
    }
  }
}

export default CampaignGroupMemberCriteriaGameModes;
