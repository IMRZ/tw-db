
import { CollectionCache, CollectionKey } from "../../../common";
import { MapPinTypes } from "./MapPinTypes";
import { MapPinIconTypes } from "./MapPinIconTypes";

export namespace MapPins {
  export const KEY = new CollectionKey("map_pins");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _pinType: string;
    readonly localisedDescription: string;
    readonly _pinIconType: string;
    readonly localisedTitle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._pinType = values["pin_type"];
      this.localisedDescription = values["localised_description"];
      this._pinIconType = values["pin_icon_type"];
      this.localisedTitle = values["localised_title"];
    }
    
    get pinType(): MapPinTypes.Entry | undefined {
      const collection = <MapPinTypes.Entry[]>this.collectionCache.getCollection(MapPinTypes.KEY, MapPinTypes.Entry);
      return collection.find(entry => entry.key === this._pinType);
    }
    
    get pinIconType(): MapPinIconTypes.Entry | undefined {
      const collection = <MapPinIconTypes.Entry[]>this.collectionCache.getCollection(MapPinIconTypes.KEY, MapPinIconTypes.Entry);
      return collection.find(entry => entry.key === this._pinIconType);
    }
  }
}

export default MapPins;
