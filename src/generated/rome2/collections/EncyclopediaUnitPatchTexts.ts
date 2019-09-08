
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { EncyclopediaPatchTexts } from "./EncyclopediaPatchTexts";

export namespace EncyclopediaUnitPatchTexts {
  export const KEY = new CollectionKey("encyclopedia_unit_patch_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: string;
    readonly _patchText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this._patchText = values["patch_text"];
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
    
    get patchText(): EncyclopediaPatchTexts.Entry | undefined {
      const collection = <EncyclopediaPatchTexts.Entry[]>this.collectionCache.getCollection(EncyclopediaPatchTexts.KEY, EncyclopediaPatchTexts.Entry);
      return collection.find(entry => entry.key === this._patchText);
    }
  }
}

export default EncyclopediaUnitPatchTexts;
