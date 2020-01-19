
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignFlagStyles {
  export const KEY = new CollectionKey("campaign_flag_styles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly style: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.style = values["style"];
    }
    
  }
}

export default CampaignFlagStyles;
