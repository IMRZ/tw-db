import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { Resources } from "./Resources";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";
export declare namespace TradeDisplayOwningCultureProducedResourceTradeModelOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _owningCulture: string;
        readonly _producedResource: string;
        readonly _model: string;
        readonly priority: number;
        readonly relativeFrequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        get owningCulture(): Cultures.Entry | undefined;
        get producedResource(): Resources.Entry | undefined;
        get model(): TradeDisplayTradeModels.Entry | undefined;
    }
}
export default TradeDisplayOwningCultureProducedResourceTradeModelOptions;
