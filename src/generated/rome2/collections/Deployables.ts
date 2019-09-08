
import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsDeployables } from "./ModelsDeployables";
import { UiUnitStats } from "./UiUnitStats";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";

export namespace Deployables {
  export const KEY = new CollectionKey("deployables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly _model: string;
    readonly _model2: string;
    readonly number: number;
    readonly spacingX: number;
    readonly spacingY: number;
    readonly minRows: number;
    readonly minColumns: number;
    readonly randomOffset: number;
    readonly hitpoints: number;
    readonly killChance: number;
    readonly _statMod: string;
    readonly value: number;
    readonly _how: string;
    readonly iconName: string;
    readonly infoPic: string;
    readonly description: string;
    readonly tooltip: string;
    readonly inEncyclopaedia: boolean;
    readonly recruitmentCap: number;
    readonly maxRows: number;
    readonly ignitionThreshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this._model = values["model"];
      this._model2 = values["model_2"];
      this.number = values["number"];
      this.spacingX = values["spacing_x"];
      this.spacingY = values["spacing_y"];
      this.minRows = values["min_rows"];
      this.minColumns = values["min_columns"];
      this.randomOffset = values["random_offset"];
      this.hitpoints = values["hitpoints"];
      this.killChance = values["kill_chance"];
      this._statMod = values["stat_mod"];
      this.value = values["value"];
      this._how = values["how"];
      this.iconName = values["icon_name"];
      this.infoPic = values["info_pic"];
      this.description = values["description"];
      this.tooltip = values["tooltip"];
      this.inEncyclopaedia = !!values["in_encyclopaedia"];
      this.recruitmentCap = values["recruitment_cap"];
      this.maxRows = values["max_rows"];
      this.ignitionThreshold = values["ignition_threshold"];
    }
    
    get model(): ModelsDeployables.Entry | undefined {
      const collection = <ModelsDeployables.Entry[]>this.collectionCache.getCollection(ModelsDeployables.KEY, ModelsDeployables.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get model2(): ModelsDeployables.Entry | undefined {
      const collection = <ModelsDeployables.Entry[]>this.collectionCache.getCollection(ModelsDeployables.KEY, ModelsDeployables.Entry);
      return collection.find(entry => entry.key === this._model2);
    }
    
    get statMod(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._statMod);
    }
    
    get how(): UnitStatModifiersHowEnums.Entry | undefined {
      const collection = <UnitStatModifiersHowEnums.Entry[]>this.collectionCache.getCollection(UnitStatModifiersHowEnums.KEY, UnitStatModifiersHowEnums.Entry);
      return collection.find(entry => entry.key === this._how);
    }
  }
}

export default Deployables;
