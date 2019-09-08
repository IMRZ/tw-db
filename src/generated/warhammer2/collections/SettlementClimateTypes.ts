
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SettlementClimateTypes {
  export const KEY = new CollectionKey("settlement_climate_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly uiIconImage: string;
    readonly uiBackgroundImage: string;
    readonly uiName: string;
    readonly uiDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.uiIconImage = values["ui_icon_image"];
      this.uiBackgroundImage = values["ui_background_image"];
      this.uiName = values["ui_name"];
      this.uiDescription = values["ui_description"];
    }
    
  }
}

export default SettlementClimateTypes;
