import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { CaiPersonalities } from "./CaiPersonalities";
import { CaiPersonalitiesRandomGroups } from "./CaiPersonalitiesRandomGroups";
import { CaiPersonalitiesRandomisationPolicies } from "./CaiPersonalitiesRandomisationPolicies";
export declare namespace CaiPersonalitiesFactionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly _campaignKey: string;
        readonly _defaultPersonality: string;
        readonly _personalityGroup: string;
        readonly _randomisationPolicyKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
        get defaultPersonality(): CaiPersonalities.Entry | undefined;
        get personalityGroup(): CaiPersonalitiesRandomGroups.Entry | undefined;
        get randomisationPolicyKey(): CaiPersonalitiesRandomisationPolicies.Entry | undefined;
    }
}
export default CaiPersonalitiesFactionJunctions;
