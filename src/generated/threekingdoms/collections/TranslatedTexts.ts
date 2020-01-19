
import { CollectionCache, CollectionKey } from "../../../common";
import { Languages } from "./Languages";

export namespace TranslatedTexts {
  export const KEY = new CollectionKey("translated_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _language: string;
    readonly lastEnglishText: string;
    readonly translatedText: string;
    readonly requiresTranslation: boolean;
    readonly requiresRecording: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._language = values["language"];
      this.lastEnglishText = values["last_english_text"];
      this.translatedText = values["translated_text"];
      this.requiresTranslation = !!values["requires_translation"];
      this.requiresRecording = !!values["requires_recording"];
    }
    
    get language(): Languages.Entry | undefined {
      const collection = <Languages.Entry[]>this.collectionCache.getCollection(Languages.KEY, Languages.Entry);
      return collection.find(entry => entry.key === this._language);
    }
  }
}

export default TranslatedTexts;
