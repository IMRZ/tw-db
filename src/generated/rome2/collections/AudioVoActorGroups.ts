
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioVoActors } from "./AudioVoActors";

export namespace AudioVoActorGroups {
  export const KEY = new CollectionKey("audio_vo_actor_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _actor1: string;
    readonly _actor2: string;
    readonly _actor3: string;
    readonly _actor4: string;
    readonly _actor5: string;
    readonly _actor6: string;
    readonly _actor7: string;
    readonly _actor8: string;
    readonly _actor9: string;
    readonly _actor10: string;
    readonly _actor11: string;
    readonly _actor12: string;
    readonly _actor13: string;
    readonly _actor14: string;
    readonly _actor15: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._actor1 = values["actor_1"];
      this._actor2 = values["actor_2"];
      this._actor3 = values["actor_3"];
      this._actor4 = values["actor_4"];
      this._actor5 = values["actor_5"];
      this._actor6 = values["actor_6"];
      this._actor7 = values["actor_7"];
      this._actor8 = values["actor_8"];
      this._actor9 = values["actor_9"];
      this._actor10 = values["actor_10"];
      this._actor11 = values["actor_11"];
      this._actor12 = values["actor_12"];
      this._actor13 = values["actor_13"];
      this._actor14 = values["actor_14"];
      this._actor15 = values["actor_15"];
    }
    
    get actor1(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor1);
    }
    
    get actor2(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor2);
    }
    
    get actor3(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor3);
    }
    
    get actor4(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor4);
    }
    
    get actor5(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor5);
    }
    
    get actor6(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor6);
    }
    
    get actor7(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor7);
    }
    
    get actor8(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor8);
    }
    
    get actor9(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor9);
    }
    
    get actor10(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor10);
    }
    
    get actor11(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor11);
    }
    
    get actor12(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor12);
    }
    
    get actor13(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor13);
    }
    
    get actor14(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor14);
    }
    
    get actor15(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._actor15);
    }
  }
}

export default AudioVoActorGroups;
