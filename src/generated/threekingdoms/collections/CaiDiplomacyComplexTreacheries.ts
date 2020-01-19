
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiDiplomacyComplexTreacheries {
  export const KEY = new CollectionKey("cai_diplomacy_complex_treacheries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _firstEvent: string;
    readonly _secondEvent: string;
    readonly maxTurnDifference: number;
    readonly value: number;
    readonly constantValue: number;
    readonly _displayString: string;
    readonly _longDescriptionString: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._firstEvent = values["first_event"];
      this._secondEvent = values["second_event"];
      this.maxTurnDifference = values["max_turn_difference"];
      this.value = values["value"];
      this.constantValue = values["constant_value"];
      this._displayString = values["display_string"];
      this._longDescriptionString = values["long_description_string"];
      this.priority = values["priority"];
    }
    
    get firstEvent(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._firstEvent);
    }
    
    get secondEvent(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._secondEvent);
    }
    
    get displayString(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._displayString);
    }
    
    get longDescriptionString(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._longDescriptionString);
    }
  }
}

export default CaiDiplomacyComplexTreacheries;
