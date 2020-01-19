import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace DiplomaticActionSubcultureRestrictions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subculture: string;
        readonly canMakeVassals: boolean;
        readonly canMakeClientStates: boolean;
        readonly canMakeConfederations: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default DiplomaticActionSubcultureRestrictions;
