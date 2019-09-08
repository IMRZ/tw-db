
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MissionIssuers {
  export const KEY = new CollectionKey("mission_issuers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly issuerKey: string;
    readonly iconPath: string;
    readonly onScreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.issuerKey = values["issuer_key"];
      this.iconPath = values["icon_path"];
      this.onScreenName = values["on_screen_name"];
    }
    
  }
}

export default MissionIssuers;
