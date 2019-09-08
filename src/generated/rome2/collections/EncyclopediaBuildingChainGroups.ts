
import { CollectionCache, CollectionKey } from "../../../common";


export namespace EncyclopediaBuildingChainGroups {
  export const KEY = new CollectionKey("encyclopedia_building_chain_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupName: string;
    readonly localisedName: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupName = values["group_name"];
      this.localisedName = values["localised_name"];
      this.order = values["order"];
    }
    
  }
}

export default EncyclopediaBuildingChainGroups;
