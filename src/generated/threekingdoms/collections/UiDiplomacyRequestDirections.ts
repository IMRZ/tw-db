
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiDiplomacyRequestDirections {
  export const KEY = new CollectionKey("ui_diplomacy_request_directions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UiDiplomacyRequestDirections;
