import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { Incidents } from "./Incidents";
export declare namespace IntrigueActionsIncidentsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _culture: string;
        readonly _incident: string;
        readonly isPositive: boolean;
        readonly weight: number;
        readonly key: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
        readonly incident: Incidents.Entry | undefined;
    }
}
export default IntrigueActionsIncidentsJunctions;
