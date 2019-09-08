
import { CollectionCache, CollectionKey } from "../../../common";
import { Slots } from "./Slots";
import { Cultures } from "./Cultures";
import { WarscapeUnderlayTextures } from "./WarscapeUnderlayTextures";
import { SlotsTemplatesModels } from "./SlotsTemplatesModels";
import { WarscapeRigid } from "./WarscapeRigid";
import { WarscapeAnimated } from "./WarscapeAnimated";

export namespace SlotsArt {
  export const KEY = new CollectionKey("slots_art");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _slot: string;
    readonly _culture: string;
    readonly _underlayTerrainTexture: string;
    readonly underlayRotation: number;
    readonly underlayScale: number;
    readonly underlayDiffersWithBuilding: boolean;
    readonly _templateModel: string;
    readonly templateDiffersAtQualityZero: boolean;
    readonly _templateModelArtQualityZero: any;
    readonly useMinibuildings: boolean;
    readonly minibuildingsDifferAtQuality: boolean;
    readonly useMinibuildingsFromQuality: number;
    readonly _emptyBuildingModel: string;
    readonly _emptyBuildingModelAnimated: string;
    readonly displayEmptyBldgFromQuality: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._slot = values["slot"];
      this._culture = values["culture"];
      this._underlayTerrainTexture = values["underlay_terrain_texture"];
      this.underlayRotation = values["underlay_rotation"];
      this.underlayScale = values["underlay_scale"];
      this.underlayDiffersWithBuilding = !!values["underlay_differs_with_building"];
      this._templateModel = values["template_model"];
      this.templateDiffersAtQualityZero = !!values["template_differs_at_quality_zero"];
      this._templateModelArtQualityZero = values["template_model_art_quality_zero"];
      this.useMinibuildings = !!values["use_minibuildings"];
      this.minibuildingsDifferAtQuality = !!values["minibuildings_differ_at_quality"];
      this.useMinibuildingsFromQuality = values["use_minibuildings_from_quality"];
      this._emptyBuildingModel = values["empty_building_model"];
      this._emptyBuildingModelAnimated = values["empty_building_model_animated"];
      this.displayEmptyBldgFromQuality = values["display_empty_bldg_from_quality"];
    }
    
    get slot(): Slots.Entry | undefined {
      const collection = <Slots.Entry[]>this.collectionCache.getCollection(Slots.KEY, Slots.Entry);
      return collection.find(entry => entry.slot === this._slot);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get underlayTerrainTexture(): WarscapeUnderlayTextures.Entry | undefined {
      const collection = <WarscapeUnderlayTextures.Entry[]>this.collectionCache.getCollection(WarscapeUnderlayTextures.KEY, WarscapeUnderlayTextures.Entry);
      return collection.find(entry => entry.underlayKey === this._underlayTerrainTexture);
    }
    
    get templateModel(): SlotsTemplatesModels.Entry | undefined {
      const collection = <SlotsTemplatesModels.Entry[]>this.collectionCache.getCollection(SlotsTemplatesModels.KEY, SlotsTemplatesModels.Entry);
      return collection.find(entry => entry.templateName === this._templateModel);
    }
    
    get emptyBuildingModel(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._emptyBuildingModel);
    }
    
    get emptyBuildingModelAnimated(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._emptyBuildingModelAnimated);
    }
  }
}

export default SlotsArt;
