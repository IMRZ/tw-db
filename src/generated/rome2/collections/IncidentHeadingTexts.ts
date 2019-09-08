
import { CollectionCache, CollectionKey } from "../../../common";


export namespace IncidentHeadingTexts {
  export const KEY = new CollectionKey("incident_heading_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedHeadingText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedHeadingText = values["localised_heading_text"];
    }
    
  }
}

export default IncidentHeadingTexts;
