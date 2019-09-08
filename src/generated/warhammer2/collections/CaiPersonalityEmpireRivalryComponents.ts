
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalityEmpireRivalryComponents {
  export const KEY = new CollectionKey("cai_personality_empire_rivalry_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly expansionismMultiplierPlayer: number;
    readonly expansionismMultiplierAi: number;
    readonly _shortDescription: string;
    readonly _longDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.expansionismMultiplierPlayer = values["expansionism_multiplier_player"];
      this.expansionismMultiplierAi = values["expansionism_multiplier_ai"];
      this._shortDescription = values["short_description"];
      this._longDescription = values["long_description"];
    }
    
    get shortDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._shortDescription);
    }
    
    get longDescription(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._longDescription);
    }
  }
}

export default CaiPersonalityEmpireRivalryComponents;
