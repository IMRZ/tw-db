import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Names } from "./Names";
import { SpecialAbilityGroups } from "./SpecialAbilityGroups";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
import { CampaignCharacterArts } from "./CampaignCharacterArts";
import { BattleSetPieceArmiesCharactersSkillsets } from "./BattleSetPieceArmiesCharactersSkillsets";
export declare namespace BattleSetPieceArmiesCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly characterName: string;
        readonly _unitType: string;
        readonly _forename: number;
        readonly _surname: number;
        readonly _magicLore: string;
        readonly numMen: number;
        readonly characterLevel: number;
        readonly _agentType: string;
        readonly _agentSubtype: string;
        readonly portrait: string;
        readonly _characterModel: number;
        readonly _skillset: string;
        readonly male: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitType: MainUnits.Entry | undefined;
        readonly forename: Names.Entry | undefined;
        readonly surname: Names.Entry | undefined;
        readonly magicLore: SpecialAbilityGroups.Entry | undefined;
        readonly agentType: Agents.Entry | undefined;
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
        readonly characterModel: CampaignCharacterArts.Entry | undefined;
        readonly skillset: BattleSetPieceArmiesCharactersSkillsets.Entry | undefined;
    }
}
export default BattleSetPieceArmiesCharacters;
