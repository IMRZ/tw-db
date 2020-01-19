
import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenSpeechGroups } from "./LoadingScreenSpeechGroups";

export namespace LoadingScreenSpeechContentToGroupsJunctions {
  export const KEY = new CollectionKey("loading_screen_speech_content_to_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly content: string;
    readonly priority: number;
    readonly filenameKey: string;
    readonly numVariations: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this.content = values["content"];
      this.priority = values["priority"];
      this.filenameKey = values["filename_key"];
      this.numVariations = values["num_variations"];
    }
    
    get group(): LoadingScreenSpeechGroups.Entry | undefined {
      const collection = <LoadingScreenSpeechGroups.Entry[]>this.collectionCache.getCollection(LoadingScreenSpeechGroups.KEY, LoadingScreenSpeechGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default LoadingScreenSpeechContentToGroupsJunctions;
