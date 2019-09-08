
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Advisors {
  export const KEY = new CollectionKey("advisors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly advisorName: string;
    readonly advisorIconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.advisorName = values["advisor_name"];
      this.advisorIconPath = values["advisor_icon_path"];
    }
    
  }
}

export default Advisors;
