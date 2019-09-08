import { CollectionCache, CollectionKey } from "../../../common";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";
export declare namespace TradeDisplayGenericTradeModelOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _model: string;
        readonly priority: number;
        readonly relativeFrequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly model: TradeDisplayTradeModels.Entry | undefined;
    }
}
export default TradeDisplayGenericTradeModelOptions;
