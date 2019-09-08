
import { CollectionCache, CollectionKey } from "../../../common";
import { AdviceLevels } from "./AdviceLevels";
import { AdviceInfoTexts } from "./AdviceInfoTexts";

export namespace AdviceLevelsInfoTextJuncs {
  export const KEY = new CollectionKey("advice_levels_info_text_juncs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _adviceLevel: number;
    readonly _adviceInfoText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._adviceLevel = values["advice_level"];
      this._adviceInfoText = values["advice_info_text"];
    }
    
    get adviceLevel(): AdviceLevels.Entry | undefined {
      const collection = <AdviceLevels.Entry[]>this.collectionCache.getCollection(AdviceLevels.KEY, AdviceLevels.Entry);
      return collection.find(entry => entry.key === this._adviceLevel);
    }
    
    get adviceInfoText(): AdviceInfoTexts.Entry | undefined {
      const collection = <AdviceInfoTexts.Entry[]>this.collectionCache.getCollection(AdviceInfoTexts.KEY, AdviceInfoTexts.Entry);
      return collection.find(entry => entry.key === this._adviceInfoText);
    }
  }
}

export default AdviceLevelsInfoTextJuncs;
