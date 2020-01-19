
import { CollectionCache, CollectionKey } from "../../../common";
import { DestructionZoneMaskTypes } from "./DestructionZoneMaskTypes";

export namespace Religions {
  export const KEY = new CollectionKey("religions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly religionKey: string;
    readonly onscreen: string;
    readonly uiIconPath: string;
    readonly colRed: number;
    readonly colGreen: number;
    readonly colBlue: number;
    readonly sortOrder: number;
    readonly _destructionMaskType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.religionKey = values["religion_key"];
      this.onscreen = values["onscreen"];
      this.uiIconPath = values["ui_icon_path"];
      this.colRed = values["col_red"];
      this.colGreen = values["col_green"];
      this.colBlue = values["col_blue"];
      this.sortOrder = values["sort_order"];
      this._destructionMaskType = values["destruction_mask_type"];
    }
    
    get destructionMaskType(): DestructionZoneMaskTypes.Entry | undefined {
      const collection = <DestructionZoneMaskTypes.Entry[]>this.collectionCache.getCollection(DestructionZoneMaskTypes.KEY, DestructionZoneMaskTypes.Entry);
      return collection.find(entry => entry.key === this._destructionMaskType);
    }
  }
}

export default Religions;
