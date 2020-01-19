
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignCharacterActionSharedPerTurnLimits {
  export const KEY = new CollectionKey("campaign_character_action_shared_per_turn_limits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly allowedTimesPerTurn: number;
    readonly allowedTimesPerCharacterPerTurn: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.allowedTimesPerTurn = values["allowed_times_per_turn"];
      this.allowedTimesPerCharacterPerTurn = values["allowed_times_per_character_per_turn"];
    }
    
  }
}

export default CampaignCharacterActionSharedPerTurnLimits;
