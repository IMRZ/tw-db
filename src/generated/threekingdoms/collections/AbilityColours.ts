
import { CollectionCache, CollectionKey } from "../../../common";
import { UiColours } from "./UiColours";

export namespace AbilityColours {
  export const KEY = new CollectionKey("ability_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _backgroundColour: string;
    readonly _foregroundColour: string;
    readonly audioElementSwitchName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._backgroundColour = values["background_colour"];
      this._foregroundColour = values["foreground_colour"];
      this.audioElementSwitchName = values["audio_element_switch_name"];
    }
    
    get backgroundColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._backgroundColour);
    }
    
    get foregroundColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._foregroundColour);
    }
  }
}

export default AbilityColours;
