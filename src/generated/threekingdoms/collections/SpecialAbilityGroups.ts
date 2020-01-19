
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilityGroups {
  export const KEY = new CollectionKey("special_ability_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly abilityGroup: string;
    readonly iconPath: string;
    readonly name: string;
    readonly specialEditionMask: number;
    readonly sortOrder: number;
    readonly isNaval: boolean;
    readonly colourR: number;
    readonly colourG: number;
    readonly colourB: number;
    readonly buttonName: string;
    readonly soundEvent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.abilityGroup = values["ability_group"];
      this.iconPath = values["icon_path"];
      this.name = values["name"];
      this.specialEditionMask = values["special_edition_mask"];
      this.sortOrder = values["sort_order"];
      this.isNaval = !!values["is_naval"];
      this.colourR = values["colour_r"];
      this.colourG = values["colour_g"];
      this.colourB = values["colour_b"];
      this.buttonName = values["button_name"];
      this.soundEvent = values["sound_event"];
    }
    
  }
}

export default SpecialAbilityGroups;
