
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Seasons } from "./Seasons";

export namespace StartPosCalendars {
  export const KEY = new CollectionKey("start_pos_calendars");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaign: string;
    readonly startYear: number;
    readonly _startSeason: string;
    readonly turnsPerYear: number;
    readonly startWeekOfYear: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaign = values["campaign"];
      this.startYear = values["start_year"];
      this._startSeason = values["start_season"];
      this.turnsPerYear = values["turns_per_year"];
      this.startWeekOfYear = values["start_week_of_year"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get startSeason(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._startSeason);
    }
  }
}

export default StartPosCalendars;
