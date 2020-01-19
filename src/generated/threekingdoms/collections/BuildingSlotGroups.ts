
import { CollectionCache, CollectionKey } from "../../../common";
import { BmdExportTypes } from "./BmdExportTypes";

export namespace BuildingSlotGroups {
  export const KEY = new CollectionKey("building_slot_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly defaultPrefab: string;
    readonly editorXScale: number;
    readonly editorYScale: number;
    readonly editorZScale: number;
    readonly tintColourR: number;
    readonly tintColourG: number;
    readonly tintColourB: number;
    readonly tintColourA: number;
    readonly _districtBmdExportType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.defaultPrefab = values["default_prefab"];
      this.editorXScale = values["editor_x_scale"];
      this.editorYScale = values["editor_y_scale"];
      this.editorZScale = values["editor_z_scale"];
      this.tintColourR = values["tint_colour_r"];
      this.tintColourG = values["tint_colour_g"];
      this.tintColourB = values["tint_colour_b"];
      this.tintColourA = values["tint_colour_a"];
      this._districtBmdExportType = values["district_bmd_export_type"];
    }
    
    get districtBmdExportType(): BmdExportTypes.Entry | undefined {
      const collection = <BmdExportTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypes.KEY, BmdExportTypes.Entry);
      return collection.find(entry => entry.name === this._districtBmdExportType);
    }
  }
}

export default BuildingSlotGroups;
