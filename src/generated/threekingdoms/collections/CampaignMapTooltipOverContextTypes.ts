
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignMapTooltipOverContexts } from "./CampaignMapTooltipOverContexts";

export namespace CampaignMapTooltipOverContextTypes {
  export const KEY = new CollectionKey("campaign_map_tooltip_over_context_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _overContext: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._overContext = values["over_context"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get overContext(): CampaignMapTooltipOverContexts.Entry | undefined {
      const collection = <CampaignMapTooltipOverContexts.Entry[]>this.collectionCache.getCollection(CampaignMapTooltipOverContexts.KEY, CampaignMapTooltipOverContexts.Entry);
      return collection.find(entry => entry.overContexts === this._overContext);
    }
  }
}

export default CampaignMapTooltipOverContextTypes;
