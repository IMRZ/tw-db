
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
import { StartPosDiplomacyComplexDealParticipantSets } from "./StartPosDiplomacyComplexDealParticipantSets";

export namespace StartPosDiplomacyComplexDeals {
  export const KEY = new CollectionKey("start_pos_diplomacy_complex_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly _participants: string;
    readonly establishedHowManyTurnsBeforeStartOfGame: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this._participants = values["participants"];
      this.establishedHowManyTurnsBeforeStartOfGame = values["established_how_many_turns_before_start_of_game"];
    }
    
    get deal(): StartPosDiplomacyDeals.Entry | undefined {
      const collection = <StartPosDiplomacyDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDeals.KEY, StartPosDiplomacyDeals.Entry);
      return collection.find(entry => entry.id === this._deal);
    }
    
    get participants(): StartPosDiplomacyComplexDealParticipantSets.Entry | undefined {
      const collection = <StartPosDiplomacyComplexDealParticipantSets.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyComplexDealParticipantSets.KEY, StartPosDiplomacyComplexDealParticipantSets.Entry);
      return collection.find(entry => entry.id === this._participants);
    }
  }
}

export default StartPosDiplomacyComplexDeals;
