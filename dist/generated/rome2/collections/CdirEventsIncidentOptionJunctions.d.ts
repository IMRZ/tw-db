import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { CdirEventsIncidentOptions } from "./CdirEventsIncidentOptions";
export declare namespace CdirEventsIncidentOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _incidentKey: string;
        readonly _optionKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly incidentKey: Incidents.Entry | undefined;
        readonly optionKey: CdirEventsIncidentOptions.Entry | undefined;
    }
}
export default CdirEventsIncidentOptionJunctions;
