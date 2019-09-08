import { CollectionCache, CollectionKey } from "../../../common";
import { DiplomacyKeys } from "./DiplomacyKeys";
import { DiplomacyKeyGroups } from "./DiplomacyKeyGroups";
export declare namespace DiplomacyKeysToDiplomacyKeyGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _group: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: DiplomacyKeys.Entry | undefined;
        readonly group: DiplomacyKeyGroups.Entry | undefined;
    }
}
export default DiplomacyKeysToDiplomacyKeyGroups;
