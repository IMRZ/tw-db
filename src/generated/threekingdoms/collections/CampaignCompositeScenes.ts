
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignCompositeScenes {
  export const KEY = new CollectionKey("campaign_composite_scenes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly filename: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.filename = values["filename"];
    }
    
  }
}

export default CampaignCompositeScenes;
