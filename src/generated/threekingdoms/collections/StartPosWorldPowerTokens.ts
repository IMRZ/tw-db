
import { CollectionCache, CollectionKey } from "../../../common";
import { WorldPowerTokens } from "./WorldPowerTokens";
import { StartPosFactions } from "./StartPosFactions";
import { Campaigns } from "./Campaigns";

export namespace StartPosWorldPowerTokens {
  export const KEY = new CollectionKey("start_pos_world_power_tokens");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _worldPowerToken: string;
    readonly _startPosFaction: number;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._worldPowerToken = values["world_power_token"];
      this._startPosFaction = values["start_pos_faction"];
      this._campaign = values["campaign"];
    }
    
    get worldPowerToken(): WorldPowerTokens.Entry | undefined {
      const collection = <WorldPowerTokens.Entry[]>this.collectionCache.getCollection(WorldPowerTokens.KEY, WorldPowerTokens.Entry);
      return collection.find(entry => entry.id === this._worldPowerToken);
    }
    
    get startPosFaction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._startPosFaction);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default StartPosWorldPowerTokens;
