import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryRetinueLevelDetails } from "./MercenaryRetinueLevelDetails";
export declare namespace MercenaryRetinueLevelSources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _mercenaryRetinueLevel: string;
        readonly chargesProvided: number;
        readonly hundrethsOfChargeReplenishedPerTurn: number;
        constructor(collectionCache: CollectionCache, values: any);
        get mercenaryRetinueLevel(): MercenaryRetinueLevelDetails.Entry | undefined;
    }
}
export default MercenaryRetinueLevelSources;
