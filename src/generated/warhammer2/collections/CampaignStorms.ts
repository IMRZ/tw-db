
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
import { CampaignStormTypes } from "./CampaignStormTypes";

export namespace CampaignStorms {
  export const KEY = new CollectionKey("campaign_storms");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayName: string;
    readonly _attrition: string;
    readonly _compositeScene: string;
    readonly strength: string;
    readonly _tilingCompositeScene: string;
    readonly _type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayName = values["display_name"];
      this._attrition = values["attrition"];
      this._compositeScene = values["composite_scene"];
      this.strength = values["strength"];
      this._tilingCompositeScene = values["tiling_composite_scene"];
      this._type = values["type"];
    }
    
    get attrition(): CampaignMapAttritions.Entry | undefined {
      const collection = <CampaignMapAttritions.Entry[]>this.collectionCache.getCollection(CampaignMapAttritions.KEY, CampaignMapAttritions.Entry);
      return collection.find(entry => entry.key === this._attrition);
    }
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
    
    get tilingCompositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._tilingCompositeScene);
    }
    
    get type(): CampaignStormTypes.Entry | undefined {
      const collection = <CampaignStormTypes.Entry[]>this.collectionCache.getCollection(CampaignStormTypes.KEY, CampaignStormTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
  }
}

export default CampaignStorms;
