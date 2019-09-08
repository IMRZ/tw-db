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
        readonly formation: Formations.Entry | undefined;
        readonly subCulture: CulturesSubcultures.Entry | undefined;
    }
}
export default FormationsToSubcultures;
