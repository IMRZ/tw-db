import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjects } from "./CampaignSubjects";
import { Factions } from "./Factions";
export declare namespace CampaignSubjectFactionRestrictionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignSubjectKey: string;
        readonly _factionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignSubjectKey(): CampaignSubjects.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
    }
}
export default CampaignSubjectFactionRestrictionJunctions;
