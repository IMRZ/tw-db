
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapPieces {
  export const KEY = new CollectionKey("campaign_map_pieces");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
    }
    
  }
}

export default CampaignMapPieces;
