import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignGroundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly movementCost: number;
        readonly canAmbush: boolean;
        readonly onscreenName: string;
        readonly isSea: boolean;
        readonly icon: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignGroundTypes;
