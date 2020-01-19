
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyParameterTypes {
  export const KEY = new CollectionKey("campaign_diplomacy_parameter_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyParameterTypes;
