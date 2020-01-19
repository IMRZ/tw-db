import { CollectionCache, CollectionKey } from "../../../common";
import { WorldPowerTokens } from "./WorldPowerTokens";
import { StartPosFactions } from "./StartPosFactions";
import { Campaigns } from "./Campaigns";
export declare namespace StartPosWorldPowerTokens {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _worldPowerToken: string;
        readonly _startPosFaction: number;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get worldPowerToken(): WorldPowerTokens.Entry | undefined;
        get startPosFaction(): StartPosFactions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default StartPosWorldPowerTokens;
