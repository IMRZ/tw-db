
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiDiplomacySimpleTreacheries {
  export const KEY = new CollectionKey("cai_diplomacy_simple_treacheries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: string;
    readonly value: number;
    readonly constantValue: number;
    readonly _displayString: string;
    readonly _longDescriptionString: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this.value = values["value"];
      this.constantValue = values["constant_value"];
      this._displayString = values["display_string"];
      this._longDescriptionString = values["long_description_string"];
      this.priority = values["priority"];
    }
    
    get event(): CaiDiplomacyEvents.Entry | undefined {
      const collection = <CaiDiplomacyEvents.Entry[]>this.collectionCache.getCollection(CaiDiplomacyEvents.KEY, CaiDiplomacyEvents.Entry);
      return collection.find(entry => entry.id === this._event);
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

export default CaiDiplomacySimpleTreacheries;
