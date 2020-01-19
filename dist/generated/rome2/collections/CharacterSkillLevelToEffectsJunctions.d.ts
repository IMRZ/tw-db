import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace CharacterSkillLevelToEffectsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterSkillKey: string;
        readonly level: number;
        readonly _effectKey: string;
        readonly value: number;
        readonly isFactionwide: boolean;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterSkillKey(): CharacterSkills.Entry | undefined;
        get effectKey(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default CharacterSkillLevelToEffectsJunctions;
