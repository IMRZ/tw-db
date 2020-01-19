import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { NavalUnits } from "./NavalUnits";
import { UnitWeights } from "./UnitWeights";
import { UnitCastes } from "./UnitCastes";
import { BuildingLevels } from "./BuildingLevels";
import { Religions } from "./Religions";
import { Resources } from "./Resources";
import { RegionUnitResources } from "./RegionUnitResources";
import { AudioVoiceoverCultures } from "./AudioVoiceoverCultures";
import { UiUnitGroupings } from "./UiUnitGroupings";
import { UnitPortholeCameraSettings } from "./UnitPortholeCameraSettings";
import { CampaignMounts } from "./CampaignMounts";
import { AudioVoActorGroups } from "./AudioVoActorGroups";
export declare namespace MainUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly unit: string;
        readonly _landUnit: string;
        readonly _navalUnit: string;
        readonly numShips: number;
        readonly minMenPerShip: number;
        readonly maxMenPerShip: number;
        readonly isNaval: boolean;
        readonly _weight: string;
        readonly recruitmentCost: number;
        readonly upkeepCost: number;
        readonly createTime: number;
        readonly campaignCap: number;
        readonly multiplayerCost: number;
        readonly multiplayerCap: number;
        readonly _caste: string;
        readonly prestige: number;
        readonly _additionalBuildingRequirement: string;
        readonly _religionRequirement: string;
        readonly recruitmentMovie: string;
        readonly _resourceRequirement: string;
        readonly worldLeaderOnly: boolean;
        readonly canTrade: boolean;
        readonly specialEditionMask: number;
        readonly uniqueIndex: number;
        readonly inEncyclopedia: boolean;
        readonly _regionUnitResourceRequirement: string;
        readonly _audioVoiceoverCulture: string;
        readonly _uiUnitGroupLand: string;
        readonly _uiUnitGroupNaval: string;
        readonly tier: number;
        readonly isHighThreat: boolean;
        readonly _portholeCamera: string;
        readonly _mount: string;
        readonly unitScaling: boolean;
        readonly portholeCompositeScene: string;
        readonly meleeCp: number;
        readonly missileCp: number;
        readonly canSiege: boolean;
        readonly _audioVoiceoverCultureOverride: string;
        readonly restrictXpGainInCampaign: boolean;
        readonly minHealthFraction: number;
        readonly isMergeable: boolean;
        readonly turnsToMusterToFullStrength: number;
        readonly unitCard: string;
        readonly campaignSiegeEscalationPercentageEffectiveness: number;
        readonly _voiceoverActorGroup: string;
        readonly spawningHealthFraction: number;
        readonly adcPlaysAsConversation: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get landUnit(): LandUnits.Entry | undefined;
        get navalUnit(): NavalUnits.Entry | undefined;
        get weight(): UnitWeights.Entry | undefined;
        get caste(): UnitCastes.Entry | undefined;
        get additionalBuildingRequirement(): BuildingLevels.Entry | undefined;
        get religionRequirement(): Religions.Entry | undefined;
        get resourceRequirement(): Resources.Entry | undefined;
        get regionUnitResourceRequirement(): RegionUnitResources.Entry | undefined;
        get audioVoiceoverCulture(): AudioVoiceoverCultures.Entry | undefined;
        get uiUnitGroupLand(): UiUnitGroupings.Entry | undefined;
        get uiUnitGroupNaval(): UiUnitGroupings.Entry | undefined;
        get portholeCamera(): UnitPortholeCameraSettings.Entry | undefined;
        get mount(): CampaignMounts.Entry | undefined;
        get audioVoiceoverCultureOverride(): AudioVoiceoverCultures.Entry | undefined;
        get voiceoverActorGroup(): AudioVoActorGroups.Entry | undefined;
    }
}
export default MainUnits;