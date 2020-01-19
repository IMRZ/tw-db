import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryRetinueDetails } from "./MercenaryRetinueDetails";
import { Retinues } from "./Retinues";
export declare namespace MercenaryRetinueLevelDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _owningMercenaryRetinue: string;
        readonly level: number;
        readonly additionalCostToRecruit: number;
        readonly _spawnsRetinue: string;
        constructor(collectionCache: CollectionCache, values: any);
        get owningMercenaryRetinue(): MercenaryRetinueDetails.Entry | undefined;
        get spawnsRetinue(): Retinues.Entry | undefined;
    }
}
export default MercenaryRetinueLevelDetails;
