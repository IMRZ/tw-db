import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { TradeDisplayTradeModels } from "./TradeDisplayTradeModels";
export declare namespace TradeDisplayOwningSubcultureTradeModelOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _owningSubculture: string;
        readonly _model: string;
        readonly priority: number;
        readonly relativeFrequency: number;
        constructor(collectionCache: CollectionCache, values: any);
        get owningSubculture(): CulturesSubcultures.Entry | undefined;
        get model(): TradeDisplayTradeModels.Entry | undefined;
    }
}
export default TradeDisplayOwningSubcultureTradeModelOptions;
