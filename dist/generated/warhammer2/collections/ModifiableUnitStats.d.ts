import { CollectionCache, CollectionKey } from "../../../common";
import { UnitStatLocalisations } from "./UnitStatLocalisations";
export declare namespace ModifiableUnitStats {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly statKey: string;
        readonly _localisation: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly localisation: UnitStatLocalisations.Entry | undefined;
    }
}
export default ModifiableUnitStats;
