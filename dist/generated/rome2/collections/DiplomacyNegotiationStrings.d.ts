import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyKeys } from "./DiplomacyKeys";
import { Cultures } from "./Cultures";
import { GovernmentTypes } from "./GovernmentTypes";
export declare namespace DiplomacyNegotiationStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _culture: string;
        readonly _governmentType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: DiplomacyKeys.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly governmentType: GovernmentTypes.Entry | undefined;
    }
}
export default DiplomacyNegotiationStrings;
