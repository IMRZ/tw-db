
import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";

export namespace CaiPersonalityDiplomaticEvents {
  export const KEY = new CollectionKey("cai_personality_diplomatic_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _diplomaticFactorGroupActive: string;
    readonly _diplomaticFactorGroupInactive: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._diplomaticFactorGroupActive = values["diplomatic_factor_group_active"];
      this._diplomaticFactorGroupInactive = values["diplomatic_factor_group_inactive"];
    }
    
    get diplomaticFactorGroupActive(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticFactorGroupActive);
    }
    
    get diplomaticFactorGroupInactive(): DiplomacyStrings.Entry | undefined {
      const collection = <DiplomacyStrings.Entry[]>this.collectionCache.getCollection(DiplomacyStrings.KEY, DiplomacyStrings.Entry);
      return collection.find(entry => entry.key === this._diplomaticFactorGroupInactive);
    }
  }
}

export default CaiPersonalityDiplomaticEvents;
