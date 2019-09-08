import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CampaignCharacterArts } from "./CampaignCharacterArts";
import { MilitaryForceLegacyEmblems } from "./MilitaryForceLegacyEmblems";
export declare namespace BattleSetPieceArmies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly armyName: string;
        readonly _faction: string;
        readonly isAlliedToPlayer: boolean;
        readonly isReinforcementArmy: boolean;
        readonly armyOnscreenName: string;
        readonly _armyModel: number;
        readonly _armyEmblem: string;
        readonly approachAngle: number;
        readonly deploymentZoneId: number;
        readonly aiArmyTactic: string;
        readonly isFrontendPlayerArmy: boolean;
        readonly useDefaultDeploymentZones: boolean;
        readonly isHiddenArmy: boolean;
        readonly shouldMergeArmy: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly armyModel: CampaignCharacterArts.Entry | undefined;
        readonly armyEmblem: MilitaryForceLegacyEmblems.Entry | undefined;
    }
}
export default BattleSetPieceArmies;
