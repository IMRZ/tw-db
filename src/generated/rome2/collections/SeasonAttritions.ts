
import { CollectionCache, CollectionKey } from "../../../common";
import { Seasons } from "./Seasons";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
import { Campaigns } from "./Campaigns";

export namespace SeasonAttritions {
  export const KEY = new CollectionKey("season_attritions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _season: string;
    readonly _attritionType: string;
    readonly enable: boolean;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._season = values["season"];
      this._attritionType = values["attrition_type"];
      this.enable = !!values["enable"];
      this._campaign = values["campaign"];
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
    
    get attritionType(): CampaignMapAttritions.Entry | undefined {
      const collection = <CampaignMapAttritions.Entry[]>this.collectionCache.getCollection(CampaignMapAttritions.KEY, CampaignMapAttritions.Entry);
      return collection.find(entry => entry.key === this._attritionType);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default SeasonAttritions;
