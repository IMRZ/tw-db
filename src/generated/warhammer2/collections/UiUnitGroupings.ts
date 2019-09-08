
import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitGroupParents } from "./UiUnitGroupParents";

export namespace UiUnitGroupings {
  export const KEY = new CollectionKey("ui_unit_groupings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreen: string;
    readonly icon: string;
    readonly tooltip: string;
    readonly _parentGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreen = values["onscreen"];
      this.icon = values["icon"];
      this.tooltip = values["tooltip"];
      this._parentGroup = values["parent_group"];
    }
    
    get parentGroup(): UiUnitGroupParents.Entry | undefined {
      const collection = <UiUnitGroupParents.Entry[]>this.collectionCache.getCollection(UiUnitGroupParents.KEY, UiUnitGroupParents.Entry);
      return collection.find(entry => entry.key === this._parentGroup);
    }
  }
}

export default UiUnitGroupings;
