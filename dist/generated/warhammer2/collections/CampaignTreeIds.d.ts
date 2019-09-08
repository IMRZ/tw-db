import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignTreeIds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly treeId: string;
        readonly colourR: number;
        readonly colourG: number;
        readonly colourB: number;
        readonly canBeRemoved: boolean;
        readonly season: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignTreeIds;
