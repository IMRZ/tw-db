
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { AudioCultures } from "./AudioCultures";

export namespace CulturesSubcultures {
  export const KEY = new CollectionKey("cultures_subcultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly subculture: string;
    readonly _culture: string;
    readonly index: number;
    readonly name: string;
    readonly confederationScreenName: string;
    readonly confederationSummaryName: string;
    readonly _audioCultureOverride: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.subculture = values["subculture"];
      this._culture = values["culture"];
      this.index = values["index"];
      this.name = values["name"];
      this.confederationScreenName = values["confederation_screen_name"];
      this.confederationSummaryName = values["confederation_summary_name"];
      this._audioCultureOverride = values["audio_culture_override"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get audioCultureOverride(): AudioCultures.Entry | undefined {
      const collection = <AudioCultures.Entry[]>this.collectionCache.getCollection(AudioCultures.KEY, AudioCultures.Entry);
      return collection.find(entry => entry.key === this._audioCultureOverride);
    }
  }
}

export default CulturesSubcultures;
