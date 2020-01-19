
import { CollectionCache, CollectionKey } from "../../../common";
import { UiTextReplacements } from "./UiTextReplacements";

export namespace LoadingScreenTexts {
  export const KEY = new CollectionKey("loading_screen_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _textLookup: string;
    readonly isBattleOnly: boolean;
    readonly isCampaignOnly: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._textLookup = values["text_lookup"];
      this.isBattleOnly = !!values["is_battle_only"];
      this.isCampaignOnly = !!values["is_campaign_only"];
    }
    
    get textLookup(): UiTextReplacements.Entry | undefined {
      const collection = <UiTextReplacements.Entry[]>this.collectionCache.getCollection(UiTextReplacements.KEY, UiTextReplacements.Entry);
      return collection.find(entry => entry.key === this._textLookup);
    }
  }
}

export default LoadingScreenTexts;
