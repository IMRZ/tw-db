
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityCaptiveComponents {
  export const KEY = new CollectionKey("cai_personality_captive_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly biasKill: number;
    readonly biasEnslave: number;
    readonly biasRelease: number;
    readonly espionageTargetMinRegionsAbs: number;
    readonly espionageTargetMinRegionsRel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.biasKill = values["bias_kill"];
      this.biasEnslave = values["bias_enslave"];
      this.biasRelease = values["bias_release"];
      this.espionageTargetMinRegionsAbs = values["espionage_target_min_regions_abs"];
      this.espionageTargetMinRegionsRel = values["espionage_target_min_regions_rel"];
    }
    
  }
}

export default CaiPersonalityCaptiveComponents;
