
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionResourceIds {
  export const KEY = new CollectionKey("faction_resource_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factionResourceFlag: string;
    readonly localisedDescription: string;
    readonly iconPath: string;
    readonly tooltip: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factionResourceFlag = values["faction_resource_flag"];
      this.localisedDescription = values["localised_description"];
      this.iconPath = values["icon_path"];
      this.tooltip = values["tooltip"];
      this.order = values["order"];
    }
    
  }
}

export default FactionResourceIds;
