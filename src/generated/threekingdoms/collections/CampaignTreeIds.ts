
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignTreeIds {
  export const KEY = new CollectionKey("campaign_tree_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly treeId: string;
    readonly colourR: number;
    readonly colourG: number;
    readonly colourB: number;
    readonly canBeRemoved: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.treeId = values["tree_id"];
      this.colourR = values["colour_r"];
      this.colourG = values["colour_g"];
      this.colourB = values["colour_b"];
      this.canBeRemoved = !!values["can_be_removed"];
    }
    
  }
}

export default CampaignTreeIds;
