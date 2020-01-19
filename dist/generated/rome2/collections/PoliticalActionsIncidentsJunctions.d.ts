import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalActions } from "./PoliticalActions";
import { Incidents } from "./Incidents";
export declare namespace PoliticalActionsIncidentsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _politicalAction: string;
        readonly _incident: string;
        readonly weighting: number;
        constructor(collectionCache: CollectionCache, values: any);
        get politicalAction(): PoliticalActions.Entry | undefined;
        get incident(): Incidents.Entry | undefined;
    }
}
export default PoliticalActionsIncidentsJunctions;
