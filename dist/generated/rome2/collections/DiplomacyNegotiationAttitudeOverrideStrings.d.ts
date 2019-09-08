import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyKeys } from "./DiplomacyKeys";
import { Cultures } from "./Cultures";
import { GovernmentTypes } from "./GovernmentTypes";
import { DiplomacyNegotiationAttitudes } from "./DiplomacyNegotiationAttitudes";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace DiplomacyNegotiationAttitudeOverrideStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _culture: string;
        readonly _governmentType: string;
        readonly _attitude: string;
        readonly _string: string;
        readonly option: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: DiplomacyKeys.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
        readonly governmentType: GovernmentTypes.Entry | undefined;
        readonly attitude: DiplomacyNegotiationAttitudes.Entry | undefined;
        readonly string: DiplomacyStrings.Entry | undefined;
    }
}
export default DiplomacyNegotiationAttitudeOverrideStrings;
