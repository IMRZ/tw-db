
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";

export namespace CultureCampaignDestructionCompositeSceneJunctions {
  export const KEY = new CollectionKey("culture_campaign_destruction_composite_scene_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culture: string;
    readonly _compositeScene: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culture = values["culture"];
      this._compositeScene = values["composite_scene"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
  }
}

export default CultureCampaignDestructionCompositeSceneJunctions;
