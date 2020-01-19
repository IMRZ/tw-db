
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";

export namespace CampaignMapWindsOfMagicStrengths {
  export const KEY = new CollectionKey("campaign_map_winds_of_magic_strengths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly value: number;
    readonly default: boolean;
    readonly localisedName: string;
    readonly frequency: number;
    readonly _compositeScene: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.value = values["value"];
      this.default = !!values["default"];
      this.localisedName = values["localised_name"];
      this.frequency = values["frequency"];
      this._compositeScene = values["composite_scene"];
    }
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
  }
}

export default CampaignMapWindsOfMagicStrengths;
