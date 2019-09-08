
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ParticleEffects {
  export const KEY = new CollectionKey("particle_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ParticleEffects;
