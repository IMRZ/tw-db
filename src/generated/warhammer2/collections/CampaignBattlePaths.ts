
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBattlePaths {
  export const KEY = new CollectionKey("campaign_battle_paths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly path: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.path = values["path"];
    }
    
  }
}

export default CampaignBattlePaths;
