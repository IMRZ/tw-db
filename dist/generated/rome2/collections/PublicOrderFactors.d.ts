import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
export declare namespace PublicOrderFactors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factor: string;
        readonly positivePipPath: string;
        readonly positiveTooltip: string;
        readonly negativePipPath: string;
        readonly negativeTooltip: string;
        readonly _optionalCampaignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get optionalCampaignKey(): Campaigns.Entry | undefined;
    }
}
export default PublicOrderFactors;
