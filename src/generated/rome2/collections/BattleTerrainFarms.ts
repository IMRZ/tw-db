
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeRigid } from "./WarscapeRigid";

export namespace BattleTerrainFarms {
  export const KEY = new CollectionKey("battle_terrain_farms");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly farm: string;
    readonly tileModel: string;
    readonly colourMapModel: string;
    readonly blendMapModel: string;
    readonly grassMapModel: string;
    readonly alternateColourMapModel: string;
    readonly alternateBlendMapModel: string;
    readonly alternateGrassMapModel: string;
    readonly roadColourMapModel: string;
    readonly roadBlendMapModel: string;
    readonly roadGrassMapModel: string;
    readonly tileMap: string;
    readonly wallTexture: string;
    readonly _wallEnd: string;
    readonly wallCrossSection: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.farm = values["farm"];
      this.tileModel = values["tile_model"];
      this.colourMapModel = values["colour_map_model"];
      this.blendMapModel = values["blend_map_model"];
      this.grassMapModel = values["grass_map_model"];
      this.alternateColourMapModel = values["alternate_colour_map_model"];
      this.alternateBlendMapModel = values["alternate_blend_map_model"];
      this.alternateGrassMapModel = values["alternate_grass_map_model"];
      this.roadColourMapModel = values["road_colour_map_model"];
      this.roadBlendMapModel = values["road_blend_map_model"];
      this.roadGrassMapModel = values["road_grass_map_model"];
      this.tileMap = values["tile_map"];
      this.wallTexture = values["wall_texture"];
      this._wallEnd = values["wall_end"];
      this.wallCrossSection = values["wall_cross_section"];
    }
    
    get wallEnd(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._wallEnd);
    }
  }
}

export default BattleTerrainFarms;
