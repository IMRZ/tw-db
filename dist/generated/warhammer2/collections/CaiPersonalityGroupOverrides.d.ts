import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { CaiPersonalityGroups } from "./CaiPersonalityGroups";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Cultures } from "./Cultures";
export declare namespace CaiPersonalityGroupOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly difficultyHandicap: number;
        readonly _campaignKey: string;
        readonly _personalityGroup: string;
        readonly _playerFaction: string;
        readonly _playerSubculture: string;
        readonly _playerCulture: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly factionKey: Factions.Entry | undefined;
        readonly campaignKey: Campaigns.Entry | undefined;
        readonly personalityGroup: CaiPersonalityGroups.Entry | undefined;
        readonly playerFaction: Factions.Entry | undefined;
        readonly playerSubculture: CulturesSubcultures.Entry | undefined;
        readonly playerCulture: Cultures.Entry | undefined;
    }
}
export default CaiPersonalityGroupOverrides;
