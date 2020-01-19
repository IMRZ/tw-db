import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Seasons } from "./Seasons";
export declare namespace StartPosCalendars {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly startYear: number;
        readonly _startSeason: string;
        readonly turnsPerYear: number;
        readonly startWeekOfYear: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get startSeason(): Seasons.Entry | undefined;
    }
}
export default StartPosCalendars;
