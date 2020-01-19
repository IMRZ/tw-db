
import { CollectionCache, CollectionKey } from "../../../common";
import { CustomLoadingScreens } from "./CustomLoadingScreens";

export namespace CustomLoadingScreenComponents {
  export const KEY = new CollectionKey("custom_loading_screen_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _customLoadingScreenKey: string;
    readonly componentId: string;
    readonly imagePath: string;
    readonly localisedText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._customLoadingScreenKey = values["custom_loading_screen_key"];
      this.componentId = values["component_id"];
      this.imagePath = values["image_path"];
      this.localisedText = values["localised_text"];
    }
    
    get customLoadingScreenKey(): CustomLoadingScreens.Entry | undefined {
      const collection = <CustomLoadingScreens.Entry[]>this.collectionCache.getCollection(CustomLoadingScreens.KEY, CustomLoadingScreens.Entry);
      return collection.find(entry => entry.key === this._customLoadingScreenKey);
    }
  }
}

export default CustomLoadingScreenComponents;
