import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattlefieldBuildingTransformations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly transformation: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattlefieldBuildingTransformations;
