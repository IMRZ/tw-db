
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";

export namespace CaiDiplomacyComplexTreacheries {
  export const KEY = new CollectionKey("cai_diplomacy_complex_treacheries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _firstEvent: string;
    readonly _secondEvent: string;
    readonly maxTurnDifference: number;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._firstEvent = values["first_event"];
      this._secondEvent = values["second_event"];
      this.maxTurnDifference = values["max_turn_difference"];
      this.value = values["value"];
    }
    
    get firstEvent(): CaiPersonalityDiplomaticEvents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticEvents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticEvents.KEY, CaiPersonalityDiplomaticEvents.Entry);
      return collection.find(entry => entry.id === this._firstEvent);
    }
    
    get secondEvent(): CaiPersonalityDiplomaticEvents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticEvents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticEvents.KEY, CaiPersonalityDiplomaticEvents.Entry);
      return collection.find(entry => entry.id === this._secondEvent);
    }
  }
}

export default CaiDiplomacyComplexTreacheries;
