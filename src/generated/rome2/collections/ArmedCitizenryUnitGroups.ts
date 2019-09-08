
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ArmedCitizenryUnitGroups {
  export const KEY = new CollectionKey("armed_citizenry_unit_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly unitGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.unitGroup = values["unit_group"];
    }
    
  }
}

export default ArmedCitizenryUnitGroups;
