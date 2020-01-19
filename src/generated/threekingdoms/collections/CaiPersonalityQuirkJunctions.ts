
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalities } from "./CaiPersonalities";
import { CaiPersonalityQuirks } from "./CaiPersonalityQuirks";

export namespace CaiPersonalityQuirkJunctions {
  export const KEY = new CollectionKey("cai_personality_quirk_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _personalityId: string;
    readonly _quirkId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._personalityId = values["personality_id"];
      this._quirkId = values["quirk_id"];
    }
    
    get personalityId(): CaiPersonalities.Entry | undefined {
      const collection = <CaiPersonalities.Entry[]>this.collectionCache.getCollection(CaiPersonalities.KEY, CaiPersonalities.Entry);
      return collection.find(entry => entry.key === this._personalityId);
    }
    
    get quirkId(): CaiPersonalityQuirks.Entry | undefined {
      const collection = <CaiPersonalityQuirks.Entry[]>this.collectionCache.getCollection(CaiPersonalityQuirks.KEY, CaiPersonalityQuirks.Entry);
      return collection.find(entry => entry.id === this._quirkId);
    }
  }
}

export default CaiPersonalityQuirkJunctions;
