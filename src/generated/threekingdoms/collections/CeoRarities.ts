
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CeoRarities {
  export const KEY = new CollectionKey("ceo_rarities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly rarityValue: number;
    readonly rarityName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.rarityValue = values["rarity_value"];
      this.rarityName = values["rarity_name"];
    }
    
  }
}

export default CeoRarities;
