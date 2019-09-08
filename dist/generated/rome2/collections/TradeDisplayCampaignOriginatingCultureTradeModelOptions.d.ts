import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Cultures } from "./Cultures";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";
export declare namespace TradeDisplayCampaignOriginatingCultureTradeModelOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _campaign: string;
        readonly _originatingCulture: string;
        readonly _model: string;
        readonly priority: number;
        readonly relativeFrequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaign: Campaigns.Entry | undefined;
        readonly originatingCulture: Cultures.Entry | undefined;
        readonly model: TradeDisplayTradeModels.Entry | undefined;
    }
}
export default TradeDisplayCampaignOriginatingCultureTradeModelOptions;
