import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Rituals } from "./Rituals";
import { Missions } from "./Missions";
export declare namespace CampaignGroupRituals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _ritual: string;
        readonly _unlockMission: string;
        readonly unlockTurn: number;
        readonly initiallyUnlocked: boolean;
        readonly unlockText: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get ritual(): Rituals.Entry | undefined;
        get unlockMission(): Missions.Entry | undefined;
    }
}
export default CampaignGroupRituals;
