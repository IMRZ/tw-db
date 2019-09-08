
import { CollectionCache, CollectionKey } from "../../../common";
import { MpForceGenTemplates } from "./MpForceGenTemplates";
import { MpBudgets } from "./MpBudgets";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";

export namespace MpForceGenTemplateJunctions {
  export const KEY = new CollectionKey("mp_force_gen_template_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _templateKey: string;
    readonly _budgetKey: string;
    readonly priority: number;
    readonly generalPct: number;
    readonly unitsPct: number;
    readonly upgradePct: number;
    readonly _configKey: string;
    readonly isDefender: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._templateKey = values["template_key"];
      this._budgetKey = values["budget_key"];
      this.priority = values["priority"];
      this.generalPct = values["general_pct"];
      this.unitsPct = values["units_pct"];
      this.upgradePct = values["upgrade_pct"];
      this._configKey = values["config_key"];
      this.isDefender = !!values["is_defender"];
    }
    
    get templateKey(): MpForceGenTemplates.Entry | undefined {
      const collection = <MpForceGenTemplates.Entry[]>this.collectionCache.getCollection(MpForceGenTemplates.KEY, MpForceGenTemplates.Entry);
      return collection.find(entry => entry.key === this._templateKey);
    }
    
    get budgetKey(): MpBudgets.Entry | undefined {
      const collection = <MpBudgets.Entry[]>this.collectionCache.getCollection(MpBudgets.KEY, MpBudgets.Entry);
      return collection.find(entry => entry.key === this._budgetKey);
    }
    
    get configKey(): CdirMilitaryGeneratorConfigs.Entry | undefined {
      const collection = <CdirMilitaryGeneratorConfigs.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorConfigs.KEY, CdirMilitaryGeneratorConfigs.Entry);
      return collection.find(entry => entry.key === this._configKey);
    }
  }
}

export default MpForceGenTemplateJunctions;
