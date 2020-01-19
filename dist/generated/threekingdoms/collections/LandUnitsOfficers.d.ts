import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnitsAdditionalPersonalitiesGroups } from "./LandUnitsAdditionalPersonalitiesGroups";
export declare namespace LandUnitsOfficers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _additionalPersonalities: string;
        constructor(collectionCache: CollectionCache, values: any);
        get additionalPersonalities(): LandUnitsAdditionalPersonalitiesGroups.Entry | undefined;
    }
}
export default LandUnitsOfficers;
