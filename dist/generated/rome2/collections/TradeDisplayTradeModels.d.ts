import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeAnimated } from "./WarscapeAnimated";
export declare namespace TradeDisplayTradeModels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _model: string;
        readonly _optionalFollowingModel: string;
        readonly isNaval: boolean;
        readonly optionalFollowingModelDistance: number;
        constructor(collectionCache: CollectionCache, values: any);
        get model(): WarscapeAnimated.Entry | undefined;
        get optionalFollowingModel(): WarscapeAnimated.Entry | undefined;
    }
}
export default TradeDisplayTradeModels;
