
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAttributes } from "./UnitAttributes";
import { UnitAttributesGroups } from "./UnitAttributesGroups";

export namespace UnitAttributesToGroupsJunctions {
  export const KEY = new CollectionKey("unit_attributes_to_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _attribute: string;
    readonly _attributeGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._attribute = values["attribute"];
      this._attributeGroup = values["attribute_group"];
    }
    
    get attribute(): UnitAttributes.Entry | undefined {
      const collection = <UnitAttributes.Entry[]>this.collectionCache.getCollection(UnitAttributes.KEY, UnitAttributes.Entry);
      return collection.find(entry => entry.key === this._attribute);
    }
    
    get attributeGroup(): UnitAttributesGroups.Entry | undefined {
      const collection = <UnitAttributesGroups.Entry[]>this.collectionCache.getCollection(UnitAttributesGroups.KEY, UnitAttributesGroups.Entry);
      return collection.find(entry => entry.groupName === this._attributeGroup);
    }
  }
}

export default UnitAttributesToGroupsJunctions;
