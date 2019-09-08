
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";

export namespace CampaignRogueArmySpawnGroups {
  export const KEY = new CollectionKey("campaign_rogue_army_spawn_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaign = values["campaign"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default CampaignRogueArmySpawnGroups;
