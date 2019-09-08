
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityDealGenerationGenerators {
  export const KEY = new CollectionKey("cai_personality_deal_generation_generators");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CaiPersonalityDealGenerationGenerators;
