
import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyTreatyComponents } from "./UiDiplomacyTreatyComponents";
import { UiDiplomacyParticipants } from "./UiDiplomacyParticipants";

export namespace UiDiplomaticDealsBankruptcyHighlights {
  export const KEY = new CollectionKey("ui_diplomatic_deals_bankruptcy_highlights");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _highlightDirection: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._highlightDirection = values["highlight_direction"];
    }
    
    get key(): UiDiplomacyTreatyComponents.Entry | undefined {
      const collection = <UiDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(UiDiplomacyTreatyComponents.KEY, UiDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._key);
    }
    
    get highlightDirection(): UiDiplomacyParticipants.Entry | undefined {
      const collection = <UiDiplomacyParticipants.Entry[]>this.collectionCache.getCollection(UiDiplomacyParticipants.KEY, UiDiplomacyParticipants.Entry);
      return collection.find(entry => entry.participant === this._highlightDirection);
    }
  }
}

export default UiDiplomaticDealsBankruptcyHighlights;
