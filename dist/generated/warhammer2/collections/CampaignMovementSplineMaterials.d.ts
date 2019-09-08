import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMovementSplineMaterials {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly shaftMaterial: string;
        readonly headMaterial: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMovementSplineMaterials;
