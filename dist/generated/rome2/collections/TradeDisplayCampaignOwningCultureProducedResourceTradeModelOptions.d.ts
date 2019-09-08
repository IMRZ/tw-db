import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Cultures } from "./Cultures";
import { Resources } from "./Resources";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";
export declare namespace TradeDisplayCampaignOwningCultureProducedResourceTradeModelOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _campaign: string;
        readonly _owningCulture: string;
        readonly _producedResource: string;
        readonly _model: string;
        readonly priority: number;
        readonly relativeFrequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaign: Campaigns.Entry | undefined;
        readonly owningCulture: Cultures.Entry | undefined;
        readonly producedResource: Resources.Entry | undefined;
        readonly model: TradeDisplayTradeModels.Entry | undefined;
    }
}
export default TradeDisplayCampaignOwningCultureProducedResourceTradeModelOptions;
