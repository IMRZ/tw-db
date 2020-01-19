import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotes } from "./LoadingScreenQuotes";
import { CampaignMapPlayableAreas } from "./CampaignMapPlayableAreas";
export declare namespace LoadingScreenQuotesToCampaigns {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _loadingQuote: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get loadingQuote(): LoadingScreenQuotes.Entry | undefined;
        get campaign(): CampaignMapPlayableAreas.Entry | undefined;
    }
}
export default LoadingScreenQuotesToCampaigns;
