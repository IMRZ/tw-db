import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
export declare namespace CeosToDuelOutcomeModifiers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceoKey: string;
        readonly spareKillModifier: number;
        constructor(collectionCache: CollectionCache, values: any);
        get ceoKey(): Ceos.Entry | undefined;
    }
}
export default CeosToDuelOutcomeModifiers;
