import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Abilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ability: string;
        readonly cannotFail: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Abilities;
