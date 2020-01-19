
import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitGroupParents } from "./UiUnitGroupParents";
import { UiColours } from "./UiColours";

export namespace UiUnitGroupings {
  export const KEY = new CollectionKey("ui_unit_groupings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreen: string;
    readonly icon: string;
    readonly tooltip: string;
    readonly _parentGroup: string;
    readonly _colour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreen = values["onscreen"];
      this.icon = values["icon"];
      this.tooltip = values["tooltip"];
      this._parentGroup = values["parent_group"];
      this._colour = values["colour"];
    }
    
    get parentGroup(): UiUnitGroupParents.Entry | undefined {
      const collection = <UiUnitGroupParents.Entry[]>this.collectionCache.getCollection(UiUnitGroupParents.KEY, UiUnitGroupParents.Entry);
      return collection.find(entry => entry.key === this._parentGroup);
    }
    
    get colour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour);
    }
  }
}

export default UiUnitGroupings;
