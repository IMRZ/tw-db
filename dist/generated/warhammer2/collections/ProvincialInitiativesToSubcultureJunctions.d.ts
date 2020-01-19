import { CollectionCache, CollectionKey } from "../../../common";
import { ProvincialInitiativeRecords } from "./ProvincialInitiativeRecords";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace ProvincialInitiativesToSubcultureJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _provincialInitiativeKey: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get provincialInitiativeKey(): ProvincialInitiativeRecords.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default ProvincialInitiativesToSubcultureJunctions;
