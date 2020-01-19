import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyStrings } from "./DiplomacyStrings";
export declare namespace CaiPersonalityQuirks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly required: boolean;
        readonly _descriptionShort: string;
        readonly _descriptionLong: string;
        readonly _descriptionQuote: string;
        readonly hintThreatToPlayer: number;
        constructor(collectionCache: CollectionCache, values: any);
        get descriptionShort(): DiplomacyStrings.Entry | undefined;
        get descriptionLong(): DiplomacyStrings.Entry | undefined;
        get descriptionQuote(): DiplomacyStrings.Entry | undefined;
    }
}
export default CaiPersonalityQuirks;
