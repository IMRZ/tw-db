import { CollectionCache, CollectionKey } from "../../../common";
import { Formations } from "./Formations";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace FormationsToSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _formation: string;
        readonly _subCulture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get formation(): Formations.Entry | undefined;
        get subCulture(): CulturesSubcultures.Entry | undefined;
    }
}
export default FormationsToSubcultures;
