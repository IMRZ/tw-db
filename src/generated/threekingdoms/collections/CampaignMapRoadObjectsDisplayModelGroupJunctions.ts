
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapRoadObjectsDisplayModelGroups } from "./CampaignMapRoadObjectsDisplayModelGroups";
import { CampaignMapRoadObjectsDisplayModels } from "./CampaignMapRoadObjectsDisplayModels";

export namespace CampaignMapRoadObjectsDisplayModelGroupJunctions {
  export const KEY = new CollectionKey("campaign_map_road_objects_display_model_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _model: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._model = values["model"];
    }
    
    get group(): CampaignMapRoadObjectsDisplayModelGroups.Entry | undefined {
      const collection = <CampaignMapRoadObjectsDisplayModelGroups.Entry[]>this.collectionCache.getCollection(CampaignMapRoadObjectsDisplayModelGroups.KEY, CampaignMapRoadObjectsDisplayModelGroups.Entry);
      return collection.find(entry => entry.group === this._group);
    }
    
    get model(): CampaignMapRoadObjectsDisplayModels.Entry | undefined {
      const collection = <CampaignMapRoadObjectsDisplayModels.Entry[]>this.collectionCache.getCollection(CampaignMapRoadObjectsDisplayModels.KEY, CampaignMapRoadObjectsDisplayModels.Entry);
      return collection.find(entry => entry.key === this._model);
    }
  }
}

export default CampaignMapRoadObjectsDisplayModelGroupJunctions;
