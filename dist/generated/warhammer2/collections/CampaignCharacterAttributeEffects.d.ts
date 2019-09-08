import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { AgentAttributes } from "./AgentAttributes";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace CampaignCharacterAttributeEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentRecord: string;
        readonly _attributeRecord: string;
        readonly attributeLevel: number;
        readonly _effectRecord: string;
        readonly _effectScope: string;
        readonly effectValue: number;
        readonly _cultureRecord: string;
        readonly _subcultureRecord: string;
        readonly _factionRecord: string;
        readonly _campaignRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agentRecord: Agents.Entry | undefined;
        readonly attributeRecord: AgentAttributes.Entry | undefined;
        readonly effectRecord: Effects.Entry | undefined;
        readonly effectScope: CampaignEffectScopes.Entry | undefined;
        readonly cultureRecord: Cultures.Entry | undefined;
        readonly subcultureRecord: CulturesSubcultures.Entry | undefined;
        readonly factionRecord: Factions.Entry | undefined;
        readonly campaignRecord: Campaigns.Entry | undefined;
    }
}
export default CampaignCharacterAttributeEffects;
