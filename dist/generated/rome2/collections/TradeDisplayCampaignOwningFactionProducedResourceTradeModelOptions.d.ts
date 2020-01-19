import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Factions } from "./Factions";
import { Resources } from "./Resources";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";
export declare namespace TradeDisplayCampaignOwningFactionProducedResourceTradeModelOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _campaign: string;
        readonly _owningFaction: string;
        readonly _producedResource: string;
        readonly _model: string;
        readonly priority: number;
        readonly relativeFrequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get owningFaction(): Factions.Entry | undefined;
        get producedResource(): Resources.Entry | undefined;
        get model(): TradeDisplayTradeModels.Entry | undefined;
    }
}
export default TradeDisplayCampaignOwningFactionProducedResourceTradeModelOptions;
