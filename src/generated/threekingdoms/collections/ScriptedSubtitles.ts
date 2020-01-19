
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ScriptedSubtitles {
  export const KEY = new CollectionKey("scripted_subtitles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedText: string;
    readonly characterForVo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedText = values["localised_text"];
      this.characterForVo = values["character_for_vo"];
    }
    
  }
}

export default ScriptedSubtitles;
