import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { StartPosCalendars } from "./StartPosCalendars";
import { GovernmentTypes } from "./GovernmentTypes";
import { Religions } from "./Religions";
import { CampaignAiManagers } from "./CampaignAiManagers";
import { CaiPersonalities } from "./CaiPersonalities";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
import { CaiPersonalityGroups } from "./CaiPersonalityGroups";
export declare namespace StartPosFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _faction: string;
        readonly _campaign: string;
        readonly playable: boolean;
        readonly treasury: number;
        readonly startingOrder: number;
        readonly _governmentType: string;
        readonly _stateReligion: string;
        readonly isMajor: boolean;
        readonly description: string;
        readonly _aiManager: string;
        readonly prestigeArmy: number;
        readonly prestigeNavy: number;
        readonly prestigeEconomy: number;
        readonly prestigeEnlightenment: number;
        readonly honour: number;
        readonly _caiStartingPersonality: string;
        readonly longDescription: string;
        readonly canEverConvertReligion: boolean;
        readonly _cdirMilitaryGeneratorConfig: string;
        readonly unique: boolean;
        readonly _caiPersonalityGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get campaign(): StartPosCalendars.Entry | undefined;
        get governmentType(): GovernmentTypes.Entry | undefined;
        get stateReligion(): Religions.Entry | undefined;
        get aiManager(): CampaignAiManagers.Entry | undefined;
        get caiStartingPersonality(): CaiPersonalities.Entry | undefined;
        get cdirMilitaryGeneratorConfig(): CdirMilitaryGeneratorConfigs.Entry | undefined;
        get caiPersonalityGroup(): CaiPersonalityGroups.Entry | undefined;
    }
}
export default StartPosFactions;
