import { CollectionCache, CollectionKey } from "../../../common";
import { SendDiplomatOutcomes } from "./SendDiplomatOutcomes";
import { Cultures } from "./Cultures";
import { Incidents } from "./Incidents";
export declare namespace SendDiplomatIncidents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _outcome: string;
        readonly _culture: string;
        readonly _incident: string;
        readonly weight: number;
        constructor(collectionCache: CollectionCache, values: any);
        get outcome(): SendDiplomatOutcomes.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get incident(): Incidents.Entry | undefined;
    }
}
export default SendDiplomatIncidents;
