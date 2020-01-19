
import { CollectionCache, CollectionKey } from "../../../common";
import { UiTooltips } from "./UiTooltips";

export namespace UiTooltipComponents {
  export const KEY = new CollectionKey("ui_tooltip_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _uiTooltip: string;
    readonly childId: string;
    readonly localisedText: string;
    readonly iconPath: string;
    readonly stateName: string;
    readonly isVisible: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._uiTooltip = values["ui_tooltip"];
      this.childId = values["child_id"];
      this.localisedText = values["localised_text"];
      this.iconPath = values["icon_path"];
      this.stateName = values["state_name"];
      this.isVisible = !!values["is_visible"];
    }
    
    get uiTooltip(): UiTooltips.Entry | undefined {
      const collection = <UiTooltips.Entry[]>this.collectionCache.getCollection(UiTooltips.KEY, UiTooltips.Entry);
      return collection.find(entry => entry.key === this._uiTooltip);
    }
  }
}

export default UiTooltipComponents;
