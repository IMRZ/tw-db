import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Regions } from "./Regions";
export declare namespace CampaignHiddenSettlementOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly _region: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get region(): Regions.Entry | undefined;
    }
}
export default CampaignHiddenSettlementOverrides;
