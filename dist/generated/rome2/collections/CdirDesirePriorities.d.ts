import { CollectionCache, CollectionKey } from "../../../common";
import { CdirCampaignJunctions } from "./CdirCampaignJunctions";
import { CdirDesires } from "./CdirDesires";
export declare namespace CdirDesirePriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignKey: string;
        readonly _desireKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignKey(): CdirCampaignJunctions.Entry | undefined;
        get desireKey(): CdirDesires.Entry | undefined;
    }
}
export default CdirDesirePriorities;
