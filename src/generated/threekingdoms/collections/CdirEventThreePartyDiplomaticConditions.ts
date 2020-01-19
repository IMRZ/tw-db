
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";

export namespace CdirEventThreePartyDiplomaticConditions {
  export const KEY = new CollectionKey("cdir_event_three_party_diplomatic_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _selfToOtherCriteria: string;
    readonly _targetToOtherCriteria: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._selfToOtherCriteria = values["self_to_other_criteria"];
      this._targetToOtherCriteria = values["target_to_other_criteria"];
    }
    
    get selfToOtherCriteria(): CdirEventDiplomaticConditions.Entry | undefined {
      const collection = <CdirEventDiplomaticConditions.Entry[]>this.collectionCache.getCollection(CdirEventDiplomaticConditions.KEY, CdirEventDiplomaticConditions.Entry);
      return collection.find(entry => entry.key === this._selfToOtherCriteria);
    }
    
    get targetToOtherCriteria(): CdirEventDiplomaticConditions.Entry | undefined {
      const collection = <CdirEventDiplomaticConditions.Entry[]>this.collectionCache.getCollection(CdirEventDiplomaticConditions.KEY, CdirEventDiplomaticConditions.Entry);
      return collection.find(entry => entry.key === this._targetToOtherCriteria);
    }
  }
}

export default CdirEventThreePartyDiplomaticConditions;
