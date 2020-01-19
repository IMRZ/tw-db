import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Names } from "./Names";
export declare namespace CampaignGroupCharacterNamesCosmeticOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _clanName: number;
        readonly _familyName: number;
        readonly _forename: number;
        readonly _otherName: number;
        readonly clanNameUseCurrent: boolean;
        readonly familyNameUseCurrent: boolean;
        readonly forenameUseCurrent: boolean;
        readonly otherNameUseCurrent: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get clanName(): Names.Entry | undefined;
        get familyName(): Names.Entry | undefined;
        get forename(): Names.Entry | undefined;
        get otherName(): Names.Entry | undefined;
    }
}
export default CampaignGroupCharacterNamesCosmeticOverrides;
