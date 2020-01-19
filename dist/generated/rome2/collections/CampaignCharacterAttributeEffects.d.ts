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
        get agentRecord(): Agents.Entry | undefined;
        get attributeRecord(): AgentAttributes.Entry | undefined;
        get effectRecord(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
        get cultureRecord(): Cultures.Entry | undefined;
        get subcultureRecord(): CulturesSubcultures.Entry | undefined;
        get factionRecord(): Factions.Entry | undefined;
        get campaignRecord(): Campaigns.Entry | undefined;
    }
}
export default CampaignCharacterAttributeEffects;
