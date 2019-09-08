
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";

export namespace GeomanticWebLinks {
  export const KEY = new CollectionKey("geomantic_web_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly linkStrength: number;
    readonly _beamNormalCompositeScene: string;
    readonly _circleCompositeScene: string;
    readonly _underpoweredCircleCompositeScene: string;
    readonly _fadingBeamNormalCompositeScene: string;
    readonly _beamShortCompositeScene: string;
    readonly _fadingBeamShortCompositeScene: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.linkStrength = values["link_strength"];
      this._beamNormalCompositeScene = values["beam_normal_composite_scene"];
      this._circleCompositeScene = values["circle_composite_scene"];
      this._underpoweredCircleCompositeScene = values["underpowered_circle_composite_scene"];
      this._fadingBeamNormalCompositeScene = values["fading_beam_normal_composite_scene"];
      this._beamShortCompositeScene = values["beam_short_composite_scene"];
      this._fadingBeamShortCompositeScene = values["fading_beam_short_composite_scene"];
    }
    
    get beamNormalCompositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._beamNormalCompositeScene);
    }
    
    get circleCompositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._circleCompositeScene);
    }
    
    get underpoweredCircleCompositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._underpoweredCircleCompositeScene);
    }
    
    get fadingBeamNormalCompositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._fadingBeamNormalCompositeScene);
    }
    
    get beamShortCompositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._beamShortCompositeScene);
    }
    
    get fadingBeamShortCompositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._fadingBeamShortCompositeScene);
    }
  }
}

export default GeomanticWebLinks;
