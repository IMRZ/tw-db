import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SettlementClimateTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly uiIconImage: string;
        readonly uiBackgroundImage: string;
        readonly uiName: string;
        readonly uiDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SettlementClimateTypes;
