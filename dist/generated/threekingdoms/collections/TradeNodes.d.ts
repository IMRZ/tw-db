import { CollectionCache, CollectionKey } from "../../../common";
import { Commodities } from "./Commodities";
import { TradeNodeGroups } from "./TradeNodeGroups";
export declare namespace TradeNodes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _commodity: string;
        readonly baseQuantity: number;
        readonly percentageIncreasePerAgent: number;
        readonly maximumPercentageIncrease: number;
        readonly displayName: string;
        readonly _group: string;
        constructor(collectionCache: CollectionCache, values: any);
        get commodity(): Commodities.Entry | undefined;
        get group(): TradeNodeGroups.Entry | undefined;
    }
}
export default TradeNodes;
