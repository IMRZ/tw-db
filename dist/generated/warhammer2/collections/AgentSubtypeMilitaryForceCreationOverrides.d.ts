import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
export declare namespace AgentSubtypeMilitaryForceCreationOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _validGroup: string;
        readonly _militaryForceType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly validGroup: CampaignGroups.Entry | undefined;
        readonly militaryForceType: MilitaryForceTypes.Entry | undefined;
    }
}
export default AgentSubtypeMilitaryForceCreationOverrides;
