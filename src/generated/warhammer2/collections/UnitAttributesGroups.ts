
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitAttributesGroups {
  export const KEY = new CollectionKey("unit_attributes_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly groupName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.groupName = values["group_name"];
    }
    
  }
}

export default UnitAttributesGroups;
