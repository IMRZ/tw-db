import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace DiplomacyCurrentTreatiesToDiplomaticOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _currentTreatyKey: string;
        readonly _diplomaticOptionKey: string;
        readonly canBeCancelled: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly currentTreatyKey: DiplomacyStrings.Entry | undefined;
        readonly diplomaticOptionKey: DiplomacyStrings.Entry | undefined;
    }
}
export default DiplomacyCurrentTreatiesToDiplomaticOptions;
