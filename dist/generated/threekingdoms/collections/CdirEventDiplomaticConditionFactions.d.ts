import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventDiplomaticConditions } from "./CdirEventDiplomaticConditions";
import { Factions } from "./Factions";
export declare namespace CdirEventDiplomaticConditionFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _diplomaticCondition: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get diplomaticCondition(): CdirEventDiplomaticConditions.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default CdirEventDiplomaticConditionFactions;
