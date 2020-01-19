import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { CampaignRounds } from "./CampaignRounds";
import { CampaignRoundSets } from "./CampaignRoundSets";
export declare namespace StartPosCalendars {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly startYear: number;
        readonly unique: boolean;
        readonly _startRound: number;
        readonly yearsPerRoundCycle: number;
        readonly _roundSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get startRound(): CampaignRounds.Entry | undefined;
        get roundSet(): CampaignRoundSets.Entry | undefined;
    }
}
export default StartPosCalendars;
