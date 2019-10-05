
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";

export namespace SlotSets {
  export const KEY = new CollectionKey("slot_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly useDiscoverabilityFeature: boolean;
    readonly _compositeScene: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.useDiscoverabilityFeature = !!values["use_discoverability_feature"];
      this._compositeScene = values["composite_scene"];
    }
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
  }
}

export default SlotSets;
