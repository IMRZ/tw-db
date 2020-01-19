import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAttributes } from "./UnitAttributes";
import { UnitAttributesGroups } from "./UnitAttributesGroups";
export declare namespace UnitAttributesToGroupsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _attribute: string;
        readonly _attributeGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get attribute(): UnitAttributes.Entry | undefined;
        get attributeGroup(): UnitAttributesGroups.Entry | undefined;
    }
}
export default UnitAttributesToGroupsJunctions;
