
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioVoActors } from "./AudioVoActors";

export namespace AudioVoActorGroups {
  export const KEY = new CollectionKey("audio_vo_actor_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly _voActor1: string;
    readonly _voActor2: string;
    readonly _voActor3: string;
    readonly _voActor4: string;
    readonly _voActor5: string;
    readonly _voActor6: string;
    readonly _voActor7: string;
    readonly _voActor8: string;
    readonly _voActor9: string;
    readonly _voActor10: string;
    readonly _voActor11: string;
    readonly _voActor12: string;
    readonly _voActor13: string;
    readonly _voActor14: string;
    readonly _voActor15: string;
    readonly cooldownOverlap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this._voActor1 = values["vo_actor_1"];
      this._voActor2 = values["vo_actor_2"];
      this._voActor3 = values["vo_actor_3"];
      this._voActor4 = values["vo_actor_4"];
      this._voActor5 = values["vo_actor_5"];
      this._voActor6 = values["vo_actor_6"];
      this._voActor7 = values["vo_actor_7"];
      this._voActor8 = values["vo_actor_8"];
      this._voActor9 = values["vo_actor_9"];
      this._voActor10 = values["vo_actor_10"];
      this._voActor11 = values["vo_actor_11"];
      this._voActor12 = values["vo_actor_12"];
      this._voActor13 = values["vo_actor_13"];
      this._voActor14 = values["vo_actor_14"];
      this._voActor15 = values["vo_actor_15"];
      this.cooldownOverlap = values["cooldown_overlap"];
    }
    
    get voActor1(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor1);
    }
    
    get voActor2(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor2);
    }
    
    get voActor3(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor3);
    }
    
    get voActor4(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor4);
    }
    
    get voActor5(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor5);
    }
    
    get voActor6(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor6);
    }
    
    get voActor7(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor7);
    }
    
    get voActor8(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor8);
    }
    
    get voActor9(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor9);
    }
    
    get voActor10(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor10);
    }
    
    get voActor11(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor11);
    }
    
    get voActor12(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor12);
    }
    
    get voActor13(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor13);
    }
    
    get voActor14(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor14);
    }
    
    get voActor15(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._voActor15);
    }
  }
}

export default AudioVoActorGroups;
