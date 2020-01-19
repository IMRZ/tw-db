
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignEffectGroups {
  export const KEY = new CollectionKey("campaign_effect_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly title: string;
    readonly hiddenOnUi: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.title = values["title"];
      this.hiddenOnUi = !!values["hidden_on_ui"];
    }
    
  }
}

export default CampaignEffectGroups;
