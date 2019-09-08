
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignTreeTypes } from "./CampaignTreeTypes";
import { Cultures } from "./Cultures";

export namespace CampaignTreeTypeCultures {
  export const KEY = new CollectionKey("campaign_tree_type_cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treeType: string;
    readonly _culture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treeType = values["tree_type"];
      this._culture = values["culture"];
    }
    
    get treeType(): CampaignTreeTypes.Entry | undefined {
      const collection = <CampaignTreeTypes.Entry[]>this.collectionCache.getCollection(CampaignTreeTypes.KEY, CampaignTreeTypes.Entry);
      return collection.find(entry => entry.treeType === this._treeType);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default CampaignTreeTypeCultures;
