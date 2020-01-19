import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
import { CaiPersonalityQuirks } from "./CaiPersonalityQuirks";
export declare namespace CaiPersonalityQuirkTraitJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _traitId: string;
        readonly _quirkId: string;
        readonly weight: number;
        constructor(collectionCache: CollectionCache, values: any);
        get traitId(): Ceos.Entry | undefined;
        get quirkId(): CaiPersonalityQuirks.Entry | undefined;
    }
}
export default CaiPersonalityQuirkTraitJunctions;
