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
        get key(): DiplomacyKeys.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get governmentType(): GovernmentTypes.Entry | undefined;
        get attitude(): DiplomacyNegotiationAttitudes.Entry | undefined;
        get string(): DiplomacyStrings.Entry | undefined;
    }
}
export default DiplomacyNegotiationAttitudeOverrideStrings;
