
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAutoresolverSkirmishEffectivenessRelativeToSpeeds {
  export const KEY = new CollectionKey("campaign_autoresolver_skirmish_effectiveness_relative_to_speeds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly relativeSpeedSkirmisherToOther: number;
    readonly proportionalEffectivenessSkirmisherToOther: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.relativeSpeedSkirmisherToOther = values["relative_speed_skirmisher_to_other"];
      this.proportionalEffectivenessSkirmisherToOther = values["proportional_effectiveness_skirmisher_to_other"];
    }
    
  }
}

export default CampaignAutoresolverSkirmishEffectivenessRelativeToSpeeds;
