import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
export declare namespace CampaignSettlementDisplayAqueducts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _regionKey: string;
        readonly buildingPath: string;
        readonly positionXMap: number;
        readonly positionYMap: number;
        readonly positionZHeight: number;
        readonly rotationCwRadians: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly regionKey: Regions.Entry | undefined;
    }
}
export default CampaignSettlementDisplayAqueducts;
