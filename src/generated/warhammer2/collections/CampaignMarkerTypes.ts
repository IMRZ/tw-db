
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMarkerTypes {
  export const KEY = new CollectionKey("campaign_marker_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly notes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.notes = values["notes"];
    }
    
  }
}

export default CampaignMarkerTypes;
