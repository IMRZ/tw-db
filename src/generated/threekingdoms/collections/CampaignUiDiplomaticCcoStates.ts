
import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";

export namespace CampaignUiDiplomaticCcoStates {
  export const KEY = new CollectionKey("campaign_ui_diplomatic_cco_states");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly stateName: string;
    readonly sortOrder: number;
    readonly _colour: string;
    readonly _overlayColour: string;
    readonly localisedTitle: string;
    readonly iconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.stateName = values["state_name"];
      this.sortOrder = values["sort_order"];
      this._colour = values["colour"];
      this._overlayColour = values["overlay_colour"];
      this.localisedTitle = values["localised_title"];
      this.iconPath = values["icon_path"];
    }
    
    get colour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour);
    }
    
    get overlayColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._overlayColour);
    }
  }
}

export default CampaignUiDiplomaticCcoStates;
