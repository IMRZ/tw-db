
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignVariables {
  export const KEY = new CollectionKey("campaign_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly variableKey: string;
    readonly value: number;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.variableKey = values["variable_key"];
      this.value = values["value"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignVariables;
