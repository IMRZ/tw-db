import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignAutoresolverModGroupTargets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly mechanicTarget: string;
        readonly allianceTarget: string;
        readonly playerTarget: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignAutoresolverModGroupTargets;
