import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { Incidents } from "./Incidents";
export declare namespace IntrigueActionsIncidentsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _targetCulture: string;
        readonly _incident: string;
        readonly isPositive: boolean;
        readonly weight: number;
        readonly key: number;
        readonly _sourceCulture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get targetCulture(): Cultures.Entry | undefined;
        get incident(): Incidents.Entry | undefined;
        get sourceCulture(): Cultures.Entry | undefined;
    }
}
export default IntrigueActionsIncidentsJunctions;
