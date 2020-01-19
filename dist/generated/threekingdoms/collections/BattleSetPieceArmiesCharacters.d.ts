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
        get unitType(): MainUnits.Entry | undefined;
        get forename(): Names.Entry | undefined;
        get surname(): Names.Entry | undefined;
        get magicLore(): SpecialAbilityGroups.Entry | undefined;
        get agentType(): Agents.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
        get characterModel(): CampaignCharacterArts.Entry | undefined;
        get skillset(): BattleSetPieceArmiesCharactersSkillsets.Entry | undefined;
    }
}
export default BattleSetPieceArmiesCharacters;
