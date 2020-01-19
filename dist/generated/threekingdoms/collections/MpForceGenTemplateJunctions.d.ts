import { CollectionCache, CollectionKey } from "../../../common";
import { MpForceGenTemplates } from "./MpForceGenTemplates";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { MpForceGenCompositions } from "./MpForceGenCompositions";
export declare namespace MpForceGenTemplateJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _templateKey: string;
        readonly _configKey: string;
        readonly isDefender: boolean;
        readonly _battleType: string;
        readonly _composition: string;
        constructor(collectionCache: CollectionCache, values: any);
        get templateKey(): MpForceGenTemplates.Entry | undefined;
        get configKey(): CdirMilitaryGeneratorConfigs.Entry | undefined;
        get battleType(): CampaignBattleTypeEnums.Entry | undefined;
        get composition(): MpForceGenCompositions.Entry | undefined;
    }
}
export default MpForceGenTemplateJunctions;
