
import { CollectionCache, CollectionKey } from "../../../common";
import { UiCharacterActionCategories } from "./UiCharacterActionCategories";

export namespace UiCharacterActions {
  export const KEY = new CollectionKey("ui_character_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly localisedFallbackTooltip: string;
    readonly requiresTarget: boolean;
    readonly _category: string;
    readonly performedByCharacter: boolean;
    readonly soundEventId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.localisedFallbackTooltip = values["localised_fallback_tooltip"];
      this.requiresTarget = !!values["requires_target"];
      this._category = values["category"];
      this.performedByCharacter = !!values["performed_by_character"];
      this.soundEventId = values["sound_event_id"];
    }
    
    get category(): UiCharacterActionCategories.Entry | undefined {
      const collection = <UiCharacterActionCategories.Entry[]>this.collectionCache.getCollection(UiCharacterActionCategories.KEY, UiCharacterActionCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
  }
}

export default UiCharacterActions;
