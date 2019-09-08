
import { CollectionCache, CollectionKey } from "../../../common";
import { Plagues } from "./Plagues";
import { Campaigns } from "./Campaigns";

export namespace PlaguesPermittedCampaigns {
  export const KEY = new CollectionKey("plagues_permitted_campaigns");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _plague: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._plague = values["plague"];
      this._campaign = values["campaign"];
    }
    
    get plague(): Plagues.Entry | undefined {
      const collection = <Plagues.Entry[]>this.collectionCache.getCollection(Plagues.KEY, Plagues.Entry);
      return collection.find(entry => entry.name === this._plague);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default PlaguesPermittedCampaigns;
