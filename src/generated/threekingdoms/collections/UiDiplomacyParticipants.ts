
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiDiplomacyParticipants {
  export const KEY = new CollectionKey("ui_diplomacy_participants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly participant: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.participant = values["participant"];
    }
    
  }
}

export default UiDiplomacyParticipants;
