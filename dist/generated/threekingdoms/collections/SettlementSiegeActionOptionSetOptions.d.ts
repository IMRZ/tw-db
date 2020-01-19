import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionOptionSets } from "./SettlementSiegeActionOptionSets";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";
export declare namespace SettlementSiegeActionOptionSetOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly _option: string;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): SettlementSiegeActionOptionSets.Entry | undefined;
        get option(): SettlementSiegeActionOptions.Entry | undefined;
    }
}
export default SettlementSiegeActionOptionSetOptions;
