import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
export declare namespace CampaignSettlementDisplayBuildingTrees {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly rigidLookupKey: string;
        readonly _climateType: string;
        readonly buildingPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly climateType: Climates.Entry | undefined;
    }
}
export default CampaignSettlementDisplayBuildingTrees;
