
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignCharacterAnimationSetOverrides {
  export const KEY = new CollectionKey("campaign_character_animation_set_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignCharacterAnimationSetOverrides;
