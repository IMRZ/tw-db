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
        readonly key: CampaignAiTechnologyManagers.Entry | undefined;
        readonly strategicContextKey: CaiStrategicContextTypes.Entry | undefined;
        readonly factionStatusKey: CaiFactionStatuses.Entry | undefined;
        readonly technologyResearchPolicyKey: CaiPersonalitiesTechnologyResearches.Entry | undefined;
    }
}
export default CaiPersonalitiesTechnologyResearchPolicyStrategicContextJunctions;
