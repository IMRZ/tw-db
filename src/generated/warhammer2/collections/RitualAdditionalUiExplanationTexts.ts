
import { CollectionCache, CollectionKey } from "../../../common";
import { Rituals } from "./Rituals";

export namespace RitualAdditionalUiExplanationTexts {
  export const KEY = new CollectionKey("ritual_additional_ui_explanation_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ritualKey: string;
    readonly onscreenText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ritualKey = values["ritual_key"];
      this.onscreenText = values["onscreen_text"];
    }
    
    get ritualKey(): Rituals.Entry | undefined {
      const collection = <Rituals.Entry[]>this.collectionCache.getCollection(Rituals.KEY, Rituals.Entry);
      return collection.find(entry => entry.key === this._ritualKey);
    }
  }
}

export default RitualAdditionalUiExplanationTexts;
