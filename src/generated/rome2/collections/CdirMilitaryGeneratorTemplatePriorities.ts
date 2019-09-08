
import { CollectionCache, CollectionKey } from "../../../common";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
import { CdirMilitaryGeneratorTemplates } from "./CdirMilitaryGeneratorTemplates";

export namespace CdirMilitaryGeneratorTemplatePriorities {
  export const KEY = new CollectionKey("cdir_military_generator_template_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _configKey: string;
    readonly _templateKey: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._configKey = values["config_key"];
      this._templateKey = values["template_key"];
      this.priority = values["priority"];
    }
    
    get configKey(): CdirMilitaryGeneratorConfigs.Entry | undefined {
      const collection = <CdirMilitaryGeneratorConfigs.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorConfigs.KEY, CdirMilitaryGeneratorConfigs.Entry);
      return collection.find(entry => entry.key === this._configKey);
    }
    
    get templateKey(): CdirMilitaryGeneratorTemplates.Entry | undefined {
      const collection = <CdirMilitaryGeneratorTemplates.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorTemplates.KEY, CdirMilitaryGeneratorTemplates.Entry);
      return collection.find(entry => entry.key === this._templateKey);
    }
  }
}

export default CdirMilitaryGeneratorTemplatePriorities;
