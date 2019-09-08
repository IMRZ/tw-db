import { CollectionCache, CollectionKey } from "../../../common";
import { Plagues } from "./Plagues";
import { Campaigns } from "./Campaigns";
export declare namespace PlaguesPermittedCampaigns {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _plague: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly plague: Plagues.Entry | undefined;
        readonly campaign: Campaigns.Entry | undefined;
    }
}
export default PlaguesPermittedCampaigns;
