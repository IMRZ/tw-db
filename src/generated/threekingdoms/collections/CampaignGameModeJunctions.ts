
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { GameModes } from "./GameModes";

export namespace CampaignGameModeJunctions {
  export const KEY = new CollectionKey("campaign_game_mode_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaign: string;
    readonly _gameMode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaign = values["campaign"];
      this._gameMode = values["game_mode"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get gameMode(): GameModes.Entry | undefined {
      const collection = <GameModes.Entry[]>this.collectionCache.getCollection(GameModes.KEY, GameModes.Entry);
      return collection.find(entry => entry.key === this._gameMode);
    }
  }
}

export default CampaignGameModeJunctions;
