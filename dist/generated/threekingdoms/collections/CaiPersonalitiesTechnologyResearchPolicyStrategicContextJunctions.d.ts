import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAiTechnologyManagers } from "./CampaignAiTechnologyManagers";
import { CaiStrategicContextTypes } from "./CaiStrategicContextTypes";
import { CaiFactionStatuses } from "./CaiFactionStatuses";
import { CaiPersonalitiesTechnologyResearches } from "./CaiPersonalitiesTechnologyResearches";
export declare namespace CaiPersonalitiesTechnologyResearchPolicyStrategicContextJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly _strategicContextKey: string;
        readonly _factionStatusKey: string;
        readonly _technologyResearchPolicyKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): CampaignAiTechnologyManagers.Entry | undefined;
        get strategicContextKey(): CaiStrategicContextTypes.Entry | undefined;
        get factionStatusKey(): CaiFactionStatuses.Entry | undefined;
        get technologyResearchPolicyKey(): CaiPersonalitiesTechnologyResearches.Entry | undefined;
    }
}
export default CaiPersonalitiesTechnologyResearchPolicyStrategicContextJunctions;
