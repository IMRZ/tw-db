
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignBuildingEnums {
  export const KEY = new CollectionKey("audio_campaign_building_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioCampaignBuildingEnums;
