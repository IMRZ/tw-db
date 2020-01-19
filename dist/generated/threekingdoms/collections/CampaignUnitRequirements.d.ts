import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { BuildingLevels } from "./BuildingLevels";
import { CharacterSkills } from "./CharacterSkills";
import { Resources } from "./Resources";
import { Religions } from "./Religions";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace CampaignUnitRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _tech1: string;
        readonly _tech2: string;
        readonly _building1: string;
        readonly _building2: string;
        readonly _skill1: string;
        readonly _skill2: string;
        readonly _resource1: string;
        readonly _resource2: string;
        readonly _religion: string;
        readonly mustBeWorldLeader: boolean;
        readonly minimumCharacterRank: number;
        readonly _agentSubtype: string;
        constructor(collectionCache: CollectionCache, values: any);
        get tech1(): Technologies.Entry | undefined;
        get tech2(): Technologies.Entry | undefined;
        get building1(): BuildingLevels.Entry | undefined;
        get building2(): BuildingLevels.Entry | undefined;
        get skill1(): CharacterSkills.Entry | undefined;
        get skill2(): CharacterSkills.Entry | undefined;
        get resource1(): Resources.Entry | undefined;
        get resource2(): Resources.Entry | undefined;
        get religion(): Religions.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
    }
}
export default CampaignUnitRequirements;
