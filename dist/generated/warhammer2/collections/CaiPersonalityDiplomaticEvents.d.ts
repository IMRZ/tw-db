import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalityDiplomaticEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _diplomaticFactorGroupActive: string;
        readonly _diplomaticFactorGroupInactive: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly diplomaticFactorGroupActive: DiplomacyStrings.Entry | undefined;
        readonly diplomaticFactorGroupInactive: DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalityDiplomaticEvents;
