
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapRoadObjectsDisplayModels } from "./CampaignMapRoadObjectsDisplayModels";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";

export namespace CampaignMapRoadObjectsDisplayModelCompositeScenes {
  export const KEY = new CollectionKey("campaign_map_road_objects_display_model_composite_scenes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly index: number;
    readonly _model: string;
    readonly _compositeScene: string;
    readonly offsetDistance: number;
    readonly scale: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.index = values["index"];
      this._model = values["model"];
      this._compositeScene = values["composite_scene"];
      this.offsetDistance = values["offset_distance"];
      this.scale = values["scale"];
    }
    
    get model(): CampaignMapRoadObjectsDisplayModels.Entry | undefined {
      const collection = <CampaignMapRoadObjectsDisplayModels.Entry[]>this.collectionCache.getCollection(CampaignMapRoadObjectsDisplayModels.KEY, CampaignMapRoadObjectsDisplayModels.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
  }
}

export default CampaignMapRoadObjectsDisplayModelCompositeScenes;
