
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FrontendFactionGroups {
  export const KEY = new CollectionKey("frontend_faction_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;
    readonly localisedDescription: string;
    readonly iconPath: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
      this.localisedDescription = values["localised_description"];
      this.iconPath = values["icon_path"];
      this.sortOrder = values["sort_order"];
    }
    
  }
}

export default FrontendFactionGroups;
