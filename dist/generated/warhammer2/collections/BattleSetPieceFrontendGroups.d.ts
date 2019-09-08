import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleSetPieceFrontendGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly sortOrder: number;
        readonly campaignMap: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleSetPieceFrontendGroups;
