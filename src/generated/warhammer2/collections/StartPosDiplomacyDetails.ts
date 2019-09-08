
import { CollectionCache, CollectionKey } from "../../../common";


export namespace StartPosDiplomacyDetails {
  export const KEY = new CollectionKey("start_pos_diplomacy_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default StartPosDiplomacyDetails;
