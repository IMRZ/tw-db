import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodeSets } from "./CharacterSkillNodeSets";
import { CharacterSkills } from "./CharacterSkills";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CharacterSkillNodes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _characterSkillNodeSetKey: string;
        readonly _characterSkillKey: string;
        readonly _factionKey: string;
        readonly _campaignKey: string;
        readonly tier: number;
        readonly indent: number;
        readonly _subculture: string;
        readonly pointsOnCreation: number;
        readonly requiredNumParents: number;
        readonly visibleInUi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly characterSkillNodeSetKey: CharacterSkillNodeSets.Entry | undefined;
        readonly characterSkillKey: CharacterSkills.Entry | undefined;
        readonly factionKey: Factions.Entry | undefined;
        readonly campaignKey: Campaigns.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
    }
}
export default CharacterSkillNodes;
