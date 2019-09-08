import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TExcDataFolders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly directory: string;
        readonly codeOwner: string;
        readonly author: string;
        readonly exclude: boolean;
        readonly packingNotes: string;
        readonly _packFile: any;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TExcDataFolders;
