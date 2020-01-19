
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace DiplomacyCurrentTreatiesToDiplomaticOptions {
  export const KEY = new CollectionKey("diplomacy_current_treaties_to_diplomatic_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _currentTreatyKey: string;
    readonly _diplomaticOptionKey: string;
    readonly canBeCancelled: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._currentTreatyKey = values["current_treaty_key"];
      this._diplomaticOptionKey = values["diplomatic_option_key"];
      this.canBeCancelled = !!values["can_be_cancelled"];
    }
    
    get currentTreatyKey(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._currentTreatyKey);
    }
    
    get diplomaticOptionKey(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticOptionKey);
    }
  }
}

export default DiplomacyCurrentTreatiesToDiplomaticOptions;
