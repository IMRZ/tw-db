
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MapPinIconTypes {
  export const KEY = new CollectionKey("map_pin_icon_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedDescription: string;
    readonly iconPath: string;
    readonly isUserPlaceable: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedDescription = values["localised_description"];
      this.iconPath = values["icon_path"];
      this.isUserPlaceable = !!values["is_user_placeable"];
    }
    
  }
}

export default MapPinIconTypes;
