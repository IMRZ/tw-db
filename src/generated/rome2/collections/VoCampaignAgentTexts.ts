
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace VoCampaignAgentTexts {
  export const KEY = new CollectionKey("vo_campaign_agent_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly character: string;
    readonly key: string;
    readonly text: string;
    readonly _culture: string;
    readonly _subculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.character = values["character"];
      this.key = values["key"];
      this.text = values["text"];
      this._culture = values["culture"];
      this._subculture = values["subculture"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default VoCampaignAgentTexts;
