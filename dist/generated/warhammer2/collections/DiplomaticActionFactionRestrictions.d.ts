import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
export declare namespace DiplomaticActionFactionRestrictions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly canMakeVassals: boolean;
        readonly canMakeClientStates: boolean;
        readonly canMakeConfederations: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
    }
}
export default DiplomaticActionFactionRestrictions;
