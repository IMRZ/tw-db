import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { RitualChains } from "./RitualChains";
import { Missions } from "./Missions";
export declare namespace CampaignGroupRitualChains {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _ritualChain: string;
        readonly _unlockMission: string;
        readonly unlockTurn: number;
        readonly sharedProgress: boolean;
        readonly initiallyUnlocked: boolean;
        readonly unlockText: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly ritualChain: RitualChains.Entry | undefined;
        readonly unlockMission: Missions.Entry | undefined;
    }
}
export default CampaignGroupRitualChains;
