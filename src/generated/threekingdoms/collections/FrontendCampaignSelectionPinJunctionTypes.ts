
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FrontendCampaignSelectionPinJunctionTypes {
  export const KEY = new CollectionKey("frontend_campaign_selection_pin_junction_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default FrontendCampaignSelectionPinJunctionTypes;
