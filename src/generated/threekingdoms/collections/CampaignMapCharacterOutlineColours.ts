
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { UiColours } from "./UiColours";

export namespace CampaignMapCharacterOutlineColours {
  export const KEY = new CollectionKey("campaign_map_character_outline_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _colour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._colour = values["colour"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get colour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour);
    }
  }
}

export default CampaignMapCharacterOutlineColours;
