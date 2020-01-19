
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueIdsMinisterialPositions {
  export const KEY = new CollectionKey("campaign_bonus_value_ids_ministerial_positions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly notes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.notes = values["notes"];
    }
    
  }
}

export default CampaignBonusValueIdsMinisterialPositions;
