
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";

export namespace CampaignStancesCompositeScenes {
  export const KEY = new CollectionKey("campaign_stances_composite_scenes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stance: string;
    readonly _group: string;
    readonly _compositeScene: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stance = values["stance"];
      this._group = values["group"];
      this._compositeScene = values["composite_scene"];
    }
    
    get stance(): CampaignStances.Entry | undefined {
      const collection = <CampaignStances.Entry[]>this.collectionCache.getCollection(CampaignStances.KEY, CampaignStances.Entry);
      return collection.find(entry => entry.key === this._stance);
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
  }
}

export default CampaignStancesCompositeScenes;
