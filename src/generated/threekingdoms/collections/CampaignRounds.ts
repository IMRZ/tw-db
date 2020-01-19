
import { CollectionCache, CollectionKey } from "../../../common";
import { RandomLocalisationStrings } from "./RandomLocalisationStrings";
import { Seasons } from "./Seasons";
import { CampaignRoundSets } from "./CampaignRoundSets";

export namespace CampaignRounds {
  export const KEY = new CollectionKey("campaign_rounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly index: number;
    readonly _text: string;
    readonly _season: string;
    readonly _roundSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.index = values["index"];
      this._text = values["text"];
      this._season = values["season"];
      this._roundSet = values["round_set"];
    }
    
    get text(): RandomLocalisationStrings.Entry | undefined {
      const collection = <RandomLocalisationStrings.Entry[]>this.collectionCache.getCollection(RandomLocalisationStrings.KEY, RandomLocalisationStrings.Entry);
      return collection.find(entry => entry.key === this._text);
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
    
    get roundSet(): CampaignRoundSets.Entry | undefined {
      const collection = <CampaignRoundSets.Entry[]>this.collectionCache.getCollection(CampaignRoundSets.KEY, CampaignRoundSets.Entry);
      return collection.find(entry => entry.key === this._roundSet);
    }
  }
}

export default CampaignRounds;
