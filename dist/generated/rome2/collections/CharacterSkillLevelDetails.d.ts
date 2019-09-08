import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CharacterSkillLevelDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly level: number;
        readonly _skillKey: string;
        readonly _factionKey: string;
        readonly _campaignKey: string;
        readonly _subcultureKey: string;
        readonly localisedName: string;
        readonly localisedDescription: string;
        readonly imagePath: string;
        readonly unlockedAtRank: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly skillKey: CharacterSkills.Entry | undefined;
        readonly factionKey: Factions.Entry | undefined;
        readonly campaignKey: Campaigns.Entry | undefined;
        readonly subcultureKey: CulturesSubcultures.Entry | undefined;
    }
}
export default CharacterSkillLevelDetails;
