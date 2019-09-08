
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";

export namespace CaiDiplomacySimpleTreacheries {
  export const KEY = new CollectionKey("cai_diplomacy_simple_treacheries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this.value = values["value"];
    }
    
    get event(): CaiPersonalityDiplomaticEvents.Entry | undefined {
      const collection = <CaiPersonalityDiplomaticEvents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDiplomaticEvents.KEY, CaiPersonalityDiplomaticEvents.Entry);
      return collection.find(entry => entry.id === this._event);
    }
  }
}

export default CaiDiplomacySimpleTreacheries;
