
import { CollectionCache, CollectionKey } from "../../../common";
import { UiColourProfiles } from "./UiColourProfiles";
import { UiColours } from "./UiColours";

export namespace UiColourProfileColourOverrides {
  export const KEY = new CollectionKey("ui_colour_profile_colour_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _colourProfile: string;
    readonly _colour: string;
    readonly colourR: number;
    readonly colourG: number;
    readonly colourB: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._colourProfile = values["colour_profile"];
      this._colour = values["colour"];
      this.colourR = values["colour_r"];
      this.colourG = values["colour_g"];
      this.colourB = values["colour_b"];
    }
    
    get colourProfile(): UiColourProfiles.Entry | undefined {
      const collection = <UiColourProfiles.Entry[]>this.collectionCache.getCollection(UiColourProfiles.KEY, UiColourProfiles.Entry);
      return collection.find(entry => entry.key === this._colourProfile);
    }
    
    get colour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._colour);
    }
  }
}

export default UiColourProfileColourOverrides;
