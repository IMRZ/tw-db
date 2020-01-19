
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalityQuirks {
  export const KEY = new CollectionKey("cai_personality_quirks");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly required: boolean;
    readonly _descriptionShort: string;
    readonly _descriptionLong: string;
    readonly _descriptionQuote: string;
    readonly hintThreatToPlayer: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.required = !!values["required"];
      this._descriptionShort = values["description_short"];
      this._descriptionLong = values["description_long"];
      this._descriptionQuote = values["description_quote"];
      this.hintThreatToPlayer = values["hint_threat_to_player"];
    }
    
    get descriptionShort(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._descriptionShort);
    }
    
    get descriptionLong(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._descriptionLong);
    }
    
    get descriptionQuote(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._descriptionQuote);
    }
  }
}

export default CaiPersonalityQuirks;
