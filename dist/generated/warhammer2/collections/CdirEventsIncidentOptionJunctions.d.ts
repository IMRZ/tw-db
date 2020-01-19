import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { CdirEventsOptions } from "./CdirEventsOptions";
export declare namespace CdirEventsIncidentOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _incidentKey: string;
        readonly _optionKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get incidentKey(): Incidents.Entry | undefined;
        get optionKey(): CdirEventsOptions.Entry | undefined;
    }
}
export default CdirEventsIncidentOptionJunctions;
