
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitBanners {
  export const KEY = new CollectionKey("unit_banners");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly factionOffsetX: number;
    readonly factionOffsetY: number;
    readonly factionScaleX: number;
    readonly factionScaleY: number;
    readonly unitcatOffsetX: number;
    readonly unitcatOffsetY: number;
    readonly unitcatScaleX: number;
    readonly unitcatScaleY: number;
    readonly commandStarOffsetX: number;
    readonly commandStarOffsetY: number;
    readonly armyIdOffsetY: number;
    readonly animationName: string;
    readonly unitIdOffsetY: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.factionOffsetX = values["faction_offset_x"];
      this.factionOffsetY = values["faction_offset_y"];
      this.factionScaleX = values["faction_scale_x"];
      this.factionScaleY = values["faction_scale_y"];
      this.unitcatOffsetX = values["unitcat_offset_x"];
      this.unitcatOffsetY = values["unitcat_offset_y"];
      this.unitcatScaleX = values["unitcat_scale_x"];
      this.unitcatScaleY = values["unitcat_scale_y"];
      this.commandStarOffsetX = values["command_star_offset_x"];
      this.commandStarOffsetY = values["command_star_offset_y"];
      this.armyIdOffsetY = values["army_id_offset_y"];
      this.animationName = values["animation_name"];
      this.unitIdOffsetY = values["unit_id_offset_y"];
    }
    
  }
}

export default UnitBanners;
