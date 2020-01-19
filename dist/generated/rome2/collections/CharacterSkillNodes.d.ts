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
        constructor(collectionCache: CollectionCache, values: any);
        get characterSkillNodeSetKey(): CharacterSkillNodeSets.Entry | undefined;
        get characterSkillKey(): CharacterSkills.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default CharacterSkillNodes;
