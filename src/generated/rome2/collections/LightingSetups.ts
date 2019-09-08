
import { CollectionCache, CollectionKey } from "../../../common";


export namespace LightingSetups {
  export const KEY = new CollectionKey("lighting_setups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly depthBias: number;
    readonly dirx: number;
    readonly diry: number;
    readonly dirz: number;
    readonly colourScale: number;
    readonly colourR: number;
    readonly colourG: number;
    readonly colourB: number;
    readonly colourTopR: number;
    readonly colourTopG: number;
    readonly colourTopB: number;
    readonly colourBottomR: number;
    readonly colourBottomG: number;
    readonly colourBottomB: number;
    readonly gamma: number;
    readonly bloomMultiplier: number;
    readonly bloomAngle1: number;
    readonly bloomAngle2: number;
    readonly bloomScale1: number;
    readonly bloomScale2: number;
    readonly mainBloomScalex: number;
    readonly mainBloomScaley: number;
    readonly mainBloomDistribution: number;
    readonly highPass: number;
    readonly colourFogR: number;
    readonly colourFogG: number;
    readonly colourFogB: number;
    readonly fogNear: number;
    readonly fogFar: number;
    readonly fogDensity: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.depthBias = values["depth_bias"];
      this.dirx = values["dirx"];
      this.diry = values["diry"];
      this.dirz = values["dirz"];
      this.colourScale = values["colour_scale"];
      this.colourR = values["colour_r"];
      this.colourG = values["colour_g"];
      this.colourB = values["colour_b"];
      this.colourTopR = values["colour_top_r"];
      this.colourTopG = values["colour_top_g"];
      this.colourTopB = values["colour_top_b"];
      this.colourBottomR = values["colour_bottom_r"];
      this.colourBottomG = values["colour_bottom_g"];
      this.colourBottomB = values["colour_bottom_b"];
      this.gamma = values["gamma"];
      this.bloomMultiplier = values["bloom_multiplier"];
      this.bloomAngle1 = values["bloom_angle_1"];
      this.bloomAngle2 = values["bloom_angle_2"];
      this.bloomScale1 = values["bloom_scale_1"];
      this.bloomScale2 = values["bloom_scale_2"];
      this.mainBloomScalex = values["main_bloom_scalex"];
      this.mainBloomScaley = values["main_bloom_scaley"];
      this.mainBloomDistribution = values["main_bloom_distribution"];
      this.highPass = values["high_pass"];
      this.colourFogR = values["colour_fog_r"];
      this.colourFogG = values["colour_fog_g"];
      this.colourFogB = values["colour_fog_b"];
      this.fogNear = values["fog_near"];
      this.fogFar = values["fog_far"];
      this.fogDensity = values["fog_density"];
    }
    
  }
}

export default LightingSetups;
