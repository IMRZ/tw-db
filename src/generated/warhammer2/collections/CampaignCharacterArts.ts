
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { AgentUniforms } from "./AgentUniforms";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { Religions } from "./Religions";

export namespace CampaignCharacterArts {
  export const KEY = new CollectionKey("campaign_character_arts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _artSetId: string;
    readonly level: number;
    readonly season: string;
    readonly age: number;
    readonly portrait: string;
    readonly _uniform: string;
    readonly card: string;
    readonly info: string;
    readonly _seaUniform: string;
    readonly _navyUniform: string;
    readonly _landAnimation: string;
    readonly _seaAnimation: string;
    readonly _navyAnimation: string;
    readonly id: number;
    readonly _religion: string;
    readonly landAnimationVfxFilter: number;
    readonly seaAnimationVfxFilter: number;
    readonly navyAnimationVfxFilter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._artSetId = values["art_set_id"];
      this.level = values["level"];
      this.season = values["season"];
      this.age = values["age"];
      this.portrait = values["portrait"];
      this._uniform = values["uniform"];
      this.card = values["card"];
      this.info = values["info"];
      this._seaUniform = values["sea_uniform"];
      this._navyUniform = values["navy_uniform"];
      this._landAnimation = values["land_animation"];
      this._seaAnimation = values["sea_animation"];
      this._navyAnimation = values["navy_animation"];
      this.id = values["id"];
      this._religion = values["religion"];
      this.landAnimationVfxFilter = values["land_animation_vfx_filter"];
      this.seaAnimationVfxFilter = values["sea_animation_vfx_filter"];
      this.navyAnimationVfxFilter = values["navy_animation_vfx_filter"];
    }
    
    get artSetId(): CampaignCharacterArtSets.Entry | undefined {
      const collection = <CampaignCharacterArtSets.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSets.KEY, CampaignCharacterArtSets.Entry);
      return collection.find(entry => entry.artSetId === this._artSetId);
    }
    
    get uniform(): AgentUniforms.Entry | undefined {
      const collection = <AgentUniforms.Entry[]>this.collectionCache.getCollection(AgentUniforms.KEY, AgentUniforms.Entry);
      return collection.find(entry => entry.uniformName === this._uniform);
    }
    
    get seaUniform(): AgentUniforms.Entry | undefined {
      const collection = <AgentUniforms.Entry[]>this.collectionCache.getCollection(AgentUniforms.KEY, AgentUniforms.Entry);
      return collection.find(entry => entry.uniformName === this._seaUniform);
    }
    
    get navyUniform(): AgentUniforms.Entry | undefined {
      const collection = <AgentUniforms.Entry[]>this.collectionCache.getCollection(AgentUniforms.KEY, AgentUniforms.Entry);
      return collection.find(entry => entry.uniformName === this._navyUniform);
    }
    
    get landAnimation(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._landAnimation);
    }
    
    get seaAnimation(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._seaAnimation);
    }
    
    get navyAnimation(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._navyAnimation);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
  }
}

export default CampaignCharacterArts;
