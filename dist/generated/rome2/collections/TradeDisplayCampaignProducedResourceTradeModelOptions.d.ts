import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Resources } from "./Resources";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";
export declare namespace TradeDisplayCampaignProducedResourceTradeModelOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _campaign: string;
        readonly _producedResource: string;
        readonly _model: string;
        readonly priority: number;
        readonly relativeFrequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get producedResource(): Resources.Entry | undefined;
        get model(): TradeDisplayTradeModels.Entry | undefined;
    }
}
export default TradeDisplayCampaignProducedResourceTradeModelOptions;
