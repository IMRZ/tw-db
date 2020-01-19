
import { CollectionCache, CollectionKey } from "../../../common";
import { UiDiplomacyCategories } from "./UiDiplomacyCategories";
import { UiDiplomacyInputTypes } from "./UiDiplomacyInputTypes";
import { UiDiplomacyTreatyComponentZoomStyles } from "./UiDiplomacyTreatyComponentZoomStyles";

export namespace UiDiplomacyTreatyComponents {
  export const KEY = new CollectionKey("ui_diplomacy_treaty_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedTitle: string;
    readonly localisedTooltip: string;
    readonly iconPath: string;
    readonly _uiDiplomacyCategory: string;
    readonly sortOrder: number;
    readonly _inputType: string;
    readonly localisedAction: string;
    readonly localisedProposerString: string;
    readonly localisedRecipientString: string;
    readonly localisedActiveProposerString: string;
    readonly localisedActiveRecipientString: string;
    readonly localisedEventFeedHeader: string;
    readonly localisedEventFeedSubheader: string;
    readonly _zoomStyle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedTitle = values["localised_title"];
      this.localisedTooltip = values["localised_tooltip"];
      this.iconPath = values["icon_path"];
      this._uiDiplomacyCategory = values["ui_diplomacy_category"];
      this.sortOrder = values["sort_order"];
      this._inputType = values["input_type"];
      this.localisedAction = values["localised_action"];
      this.localisedProposerString = values["localised_proposer_string"];
      this.localisedRecipientString = values["localised_recipient_string"];
      this.localisedActiveProposerString = values["localised_active_proposer_string"];
      this.localisedActiveRecipientString = values["localised_active_recipient_string"];
      this.localisedEventFeedHeader = values["localised_event_feed_header"];
      this.localisedEventFeedSubheader = values["localised_event_feed_subheader"];
      this._zoomStyle = values["zoom_style"];
    }
    
    get uiDiplomacyCategory(): UiDiplomacyCategories.Entry | undefined {
      const collection = <UiDiplomacyCategories.Entry[]>this.collectionCache.getCollection(UiDiplomacyCategories.KEY, UiDiplomacyCategories.Entry);
      return collection.find(entry => entry.key === this._uiDiplomacyCategory);
    }
    
    get inputType(): UiDiplomacyInputTypes.Entry | undefined {
      const collection = <UiDiplomacyInputTypes.Entry[]>this.collectionCache.getCollection(UiDiplomacyInputTypes.KEY, UiDiplomacyInputTypes.Entry);
      return collection.find(entry => entry.key === this._inputType);
    }
    
    get zoomStyle(): UiDiplomacyTreatyComponentZoomStyles.Entry | undefined {
      const collection = <UiDiplomacyTreatyComponentZoomStyles.Entry[]>this.collectionCache.getCollection(UiDiplomacyTreatyComponentZoomStyles.KEY, UiDiplomacyTreatyComponentZoomStyles.Entry);
      return collection.find(entry => entry.key === this._zoomStyle);
    }
  }
}

export default UiDiplomacyTreatyComponents;
