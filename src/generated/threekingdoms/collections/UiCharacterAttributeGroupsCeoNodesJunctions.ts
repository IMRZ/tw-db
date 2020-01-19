
import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterAttributesGroups } from "./UiCharacterAttributesGroups";
import { CeoNodes } from "./CeoNodes";

export namespace UiCharacterAttributeGroupsCeoNodesJunctions {
  export const KEY = new CollectionKey("ui_character_attribute_groups_ceo_nodes_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _ceoNode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._ceoNode = values["ceo_node"];
    }
    
    get group(): UiCharacterAttributesGroups.Entry | undefined {
      const collection = <UiCharacterAttributesGroups.Entry[]>this.collectionCache.getCollection(UiCharacterAttributesGroups.KEY, UiCharacterAttributesGroups.Entry);
      return collection.find(entry => entry.groupId === this._group);
    }
    
    get ceoNode(): CeoNodes.Entry | undefined {
      const collection = <CeoNodes.Entry[]>this.collectionCache.getCollection(CeoNodes.KEY, CeoNodes.Entry);
      return collection.find(entry => entry.key === this._ceoNode);
    }
  }
}

export default UiCharacterAttributeGroupsCeoNodesJunctions;
