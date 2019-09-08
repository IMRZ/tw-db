
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SeaSurfaces {
  export const KEY = new CollectionKey("sea_surfaces");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly seaWindSpeed: number;
    readonly seaPhillipsConstant: number;
    readonly seaChoppiness: number;
    readonly swellWindSpeed: number;
    readonly swellPhillipsConstant: number;
    readonly foamEnabled: boolean;
    readonly foamDecayRate: number;
    readonly foamFadeInTime: number;
    readonly foamCutOffValue: number;
    readonly frothValue: number;
    readonly frothDistortionSpeed: number;
    readonly frothDistortionAmount: number;
    readonly sprayCutOffValue: number;
    readonly spraySpeed: number;
    readonly sprayDuration: number;
    readonly seaShininess: number;
    readonly seaDecay: number;
    readonly reflectionFlatteningFactor: number;
    readonly waveTroughYValue: number;
    readonly detailNormalUvScale1: number;
    readonly detailNormalUvSpeed1: number;
    readonly detailNormalUvScale2: number;
    readonly detailNormalUvSpeed2: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.seaWindSpeed = values["sea_wind_speed"];
      this.seaPhillipsConstant = values["sea_phillips_constant"];
      this.seaChoppiness = values["sea_choppiness"];
      this.swellWindSpeed = values["swell_wind_speed"];
      this.swellPhillipsConstant = values["swell_phillips_constant"];
      this.foamEnabled = !!values["foam_enabled"];
      this.foamDecayRate = values["foam_decay_rate"];
      this.foamFadeInTime = values["foam_fade_in_time"];
      this.foamCutOffValue = values["foam_cut_off_value"];
      this.frothValue = values["froth_value"];
      this.frothDistortionSpeed = values["froth_distortion_speed"];
      this.frothDistortionAmount = values["froth_distortion_amount"];
      this.sprayCutOffValue = values["spray_cut_off_value"];
      this.spraySpeed = values["spray_speed"];
      this.sprayDuration = values["spray_duration"];
      this.seaShininess = values["sea_shininess"];
      this.seaDecay = values["sea_decay"];
      this.reflectionFlatteningFactor = values["reflection_flattening_factor"];
      this.waveTroughYValue = values["wave_trough_y_value"];
      this.detailNormalUvScale1 = values["detail_normal_uv_scale1"];
      this.detailNormalUvSpeed1 = values["detail_normal_uv_speed1"];
      this.detailNormalUvScale2 = values["detail_normal_uv_scale2"];
      this.detailNormalUvSpeed2 = values["detail_normal_uv_speed2"];
    }
    
  }
}

export default SeaSurfaces;
