
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirCampaignJunctions } from "./CdirCampaignJunctions";
import { CdirDesires } from "./CdirDesires";

export namespace CdirDesirePriorities {
  export const KEY = new CollectionKey("cdir_desire_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignKey: string;
    readonly _desireKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignKey = values["campaign_key"];
      this._desireKey = values["desire_key"];
      this.priority = values["priority"];
    }
    
    get campaignKey(): CdirCampaignJunctions.Entry | undefined {
      const collection = <CdirCampaignJunctions.Entry[]>this.collectionCache.getCollection(CdirCampaignJunctions.KEY, CdirCampaignJunctions.Entry);
      return collection.find(entry => entry.key === this._campaignKey);
    }
    
    get desireKey(): CdirDesires.Entry | undefined {
      const collection = <CdirDesires.Entry[]>this.collectionCache.getCollection(CdirDesires.KEY, CdirDesires.Entry);
      return collection.find(entry => entry.key === this._desireKey);
    }
  }
}

export default CdirDesirePriorities;
