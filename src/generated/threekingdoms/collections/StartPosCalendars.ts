
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { CampaignRounds } from "./CampaignRounds";
import { CampaignRoundSets } from "./CampaignRoundSets";

export namespace StartPosCalendars {
  export const KEY = new CollectionKey("start_pos_calendars");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaign: string;
    readonly startYear: number;
    readonly unique: boolean;
    readonly _startRound: number;
    readonly yearsPerRoundCycle: number;
    readonly _roundSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaign = values["campaign"];
      this.startYear = values["start_year"];
      this.unique = !!values["unique"];
      this._startRound = values["start_round"];
      this.yearsPerRoundCycle = values["years_per_round_cycle"];
      this._roundSet = values["round_set"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get startRound(): CampaignRounds.Entry | undefined {
      const collection = <CampaignRounds.Entry[]>this.collectionCache.getCollection(CampaignRounds.KEY, CampaignRounds.Entry);
      return collection.find(entry => entry.index === this._startRound);
    }
    
    get roundSet(): CampaignRoundSets.Entry | undefined {
      const collection = <CampaignRoundSets.Entry[]>this.collectionCache.getCollection(CampaignRoundSets.KEY, CampaignRoundSets.Entry);
      return collection.find(entry => entry.key === this._roundSet);
    }
  }
}

export default StartPosCalendars;
