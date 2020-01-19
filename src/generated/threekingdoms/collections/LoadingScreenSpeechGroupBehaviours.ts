
import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenSpeechGroups } from "./LoadingScreenSpeechGroups";

export namespace LoadingScreenSpeechGroupBehaviours {
  export const KEY = new CollectionKey("loading_screen_speech_group_behaviours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly startingPriority: number;
    readonly lockAfterTurn: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this.startingPriority = values["starting_priority"];
      this.lockAfterTurn = values["lock_after_turn"];
    }
    
    get group(): LoadingScreenSpeechGroups.Entry | undefined {
      const collection = <LoadingScreenSpeechGroups.Entry[]>this.collectionCache.getCollection(LoadingScreenSpeechGroups.KEY, LoadingScreenSpeechGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default LoadingScreenSpeechGroupBehaviours;
