
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";
import { Factions } from "./Factions";

export namespace CdirEventDiplomaticConditionFactions {
  export const KEY = new CollectionKey("cdir_event_diplomatic_condition_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _diplomaticCondition: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._diplomaticCondition = values["diplomatic_condition"];
      this._faction = values["faction"];
    }
    
    get diplomaticCondition(): CdirEventDiplomaticConditions.Entry | undefined {
      const collection = <CdirEventDiplomaticConditions.Entry[]>this.collectionCache.getCollection(CdirEventDiplomaticConditions.KEY, CdirEventDiplomaticConditions.Entry);
      return collection.find(entry => entry.key === this._diplomaticCondition);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default CdirEventDiplomaticConditionFactions;
