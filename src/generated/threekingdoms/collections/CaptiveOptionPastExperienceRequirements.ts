
import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionRequirements } from "./CaptiveOptionRequirements";
import { PastExperienceMemoryTypes } from "./PastExperienceMemoryTypes";

export namespace CaptiveOptionPastExperienceRequirements {
  export const KEY = new CollectionKey("captive_option_past_experience_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _captiveOptionRequirements: string;
    readonly _pastExperience: string;
    readonly invalidIfPresent: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._captiveOptionRequirements = values["captive_option_requirements"];
      this._pastExperience = values["past_experience"];
      this.invalidIfPresent = !!values["invalid_if_present"];
    }
    
    get captiveOptionRequirements(): CaptiveOptionRequirements.Entry | undefined {
      const collection = <CaptiveOptionRequirements.Entry[]>this.collectionCache.getCollection(CaptiveOptionRequirements.KEY, CaptiveOptionRequirements.Entry);
      return collection.find(entry => entry.key === this._captiveOptionRequirements);
    }
    
    get pastExperience(): PastExperienceMemoryTypes.Entry | undefined {
      const collection = <PastExperienceMemoryTypes.Entry[]>this.collectionCache.getCollection(PastExperienceMemoryTypes.KEY, PastExperienceMemoryTypes.Entry);
      return collection.find(entry => entry.key === this._pastExperience);
    }
  }
}

export default CaptiveOptionPastExperienceRequirements;
