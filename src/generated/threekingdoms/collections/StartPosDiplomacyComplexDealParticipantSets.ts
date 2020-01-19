
import { CollectionCache, CollectionKey } from "../../../common";


export namespace StartPosDiplomacyComplexDealParticipantSets {
  export const KEY = new CollectionKey("start_pos_diplomacy_complex_deal_participant_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default StartPosDiplomacyComplexDealParticipantSets;
