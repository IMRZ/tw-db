
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectileShotTypeEnum {
  export const KEY = new CollectionKey("projectile_shot_type_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly requiresEffectEnabling: boolean;
    readonly supersedesShotType: string;
    readonly tooltipText: string;
    readonly onscreenName: string;
    readonly iconName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.requiresEffectEnabling = !!values["requires_effect_enabling"];
      this.supersedesShotType = values["supersedes_shot_type"];
      this.tooltipText = values["tooltip_text"];
      this.onscreenName = values["onscreen_name"];
      this.iconName = values["icon_name"];
    }
    
  }
}

export default ProjectileShotTypeEnum;
