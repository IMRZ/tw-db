
import { CollectionCache, CollectionKey } from "../../../common";
import { MpForceGenTemplates } from "./MpForceGenTemplates";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { MpForceGenCompositions } from "./MpForceGenCompositions";

export namespace MpForceGenTemplateJunctions {
  export const KEY = new CollectionKey("mp_force_gen_template_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _templateKey: string;
    readonly _configKey: string;
    readonly isDefender: boolean;
    readonly _battleType: string;
    readonly _composition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._templateKey = values["template_key"];
      this._configKey = values["config_key"];
      this.isDefender = !!values["is_defender"];
      this._battleType = values["battle_type"];
      this._composition = values["composition"];
    }
    
    get templateKey(): MpForceGenTemplates.Entry | undefined {
      const collection = <MpForceGenTemplates.Entry[]>this.collectionCache.getCollection(MpForceGenTemplates.KEY, MpForceGenTemplates.Entry);
      return collection.find(entry => entry.key === this._templateKey);
    }
    
    get configKey(): CdirMilitaryGeneratorConfigs.Entry | undefined {
      const collection = <CdirMilitaryGeneratorConfigs.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorConfigs.KEY, CdirMilitaryGeneratorConfigs.Entry);
      return collection.find(entry => entry.key === this._configKey);
    }
    
    get battleType(): CampaignBattleTypeEnums.Entry | undefined {
      const collection = <CampaignBattleTypeEnums.Entry[]>this.collectionCache.getCollection(CampaignBattleTypeEnums.KEY, CampaignBattleTypeEnums.Entry);
      return collection.find(entry => entry.key === this._battleType);
    }
    
    get composition(): MpForceGenCompositions.Entry | undefined {
      const collection = <MpForceGenCompositions.Entry[]>this.collectionCache.getCollection(MpForceGenCompositions.KEY, MpForceGenCompositions.Entry);
      return collection.find(entry => entry.key === this._composition);
    }
  }
}

export default MpForceGenTemplateJunctions;
