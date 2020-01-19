import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRetinueChains } from "./CampaignRetinueChains";
import { Retinues } from "./Retinues";
export declare namespace CampaignRetinueChainLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _chain: string;
        readonly level: number;
        readonly _retinue: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get chain(): CampaignRetinueChains.Entry | undefined;
        get retinue(): Retinues.Entry | undefined;
    }
}
export default CampaignRetinueChainLevels;
