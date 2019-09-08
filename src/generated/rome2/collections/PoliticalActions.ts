
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PoliticalActions {
  export const KEY = new CollectionKey("political_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly politicalActionKey: string;
    readonly onscreenName: string;
    readonly iconFilePath: string;
    readonly usageCostMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.politicalActionKey = values["political_action_key"];
      this.onscreenName = values["onscreen_name"];
      this.iconFilePath = values["icon_file_path"];
      this.usageCostMultiplier = values["usage_cost_multiplier"];
    }
    
  }
}

export default PoliticalActions;
