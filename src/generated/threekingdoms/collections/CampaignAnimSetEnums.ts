
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignAnimSetEnums {
  export const KEY = new CollectionKey("campaign_anim_set_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly skeleton: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.skeleton = values["skeleton"];
    }
    
  }
}

export default CampaignAnimSetEnums;
