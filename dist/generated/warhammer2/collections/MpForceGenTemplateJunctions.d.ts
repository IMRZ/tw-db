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
        readonly templateKey: MpForceGenTemplates.Entry | undefined;
        readonly configKey: CdirMilitaryGeneratorConfigs.Entry | undefined;
        readonly battleType: CampaignBattleTypeEnums.Entry | undefined;
        readonly composition: MpForceGenCompositions.Entry | undefined;
    }
}
export default MpForceGenTemplateJunctions;
