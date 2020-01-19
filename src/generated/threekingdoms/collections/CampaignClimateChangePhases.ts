
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignClimateChangePhases {
  export const KEY = new CollectionKey("campaign_climate_change_phases");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly campaign: string;
    readonly phase: number;
    readonly roundThreshold: number;
    readonly humanImperiumThreshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.campaign = values["campaign"];
      this.phase = values["phase"];
      this.roundThreshold = values["round_threshold"];
      this.humanImperiumThreshold = values["human_imperium_threshold"];
    }
    
  }
}

export default CampaignClimateChangePhases;
