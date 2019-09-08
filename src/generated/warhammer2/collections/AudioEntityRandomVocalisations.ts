
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioEntityRandomVocalisations {
  export const KEY = new CollectionKey("audio_entity_random_vocalisations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly event: string;
    readonly minTime: number;
    readonly maxTime: number;
    readonly useReverb: boolean;
    readonly useObstruction: boolean;
    readonly limitationScale: number;
    readonly minProbability: number;
    readonly maxProbability: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.event = values["event"];
      this.minTime = values["min_time"];
      this.maxTime = values["max_time"];
      this.useReverb = !!values["use_reverb"];
      this.useObstruction = !!values["use_obstruction"];
      this.limitationScale = values["limitation_scale"];
      this.minProbability = values["min_probability"];
      this.maxProbability = values["max_probability"];
    }
    
  }
}

export default AudioEntityRandomVocalisations;
