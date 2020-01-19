import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { CdirEventsOptions } from "./CdirEventsOptions";
import { CdirEventsTargets } from "./CdirEventsTargets";
export declare namespace CdirEventsIncidentOptionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _incidentKey: string;
        readonly _optionKey: string;
        readonly value: string;
        readonly _target: string;
        constructor(collectionCache: CollectionCache, values: any);
        get incidentKey(): Incidents.Entry | undefined;
        get optionKey(): CdirEventsOptions.Entry | undefined;
        get target(): CdirEventsTargets.Entry | undefined;
    }
}
export default CdirEventsIncidentOptionJunctions;
