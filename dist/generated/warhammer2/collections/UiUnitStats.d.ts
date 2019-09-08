import { CollectionCache, CollectionKey } from "../../../common";
import { UnitStatLocalisations } from "./UnitStatLocalisations";
export declare namespace UiUnitStats {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly maxValue: number;
        readonly campaignOnly: boolean;
        readonly sortOrder: number;
        readonly _localisation: string;
        readonly icon: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly localisation: UnitStatLocalisations.Entry | undefined;
    }
}
export default UiUnitStats;
