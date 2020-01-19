
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEffectLists } from "./CeoEffectLists";
import { CharacterRelationshipOpinionTopicSets } from "./CharacterRelationshipOpinionTopicSets";

export namespace CeoNodes {
  export const KEY = new CollectionKey("ceo_nodes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _ceoEffectList: string;
    readonly pointChangePerTurnIfActive: number;
    readonly title: string;
    readonly description: string;
    readonly iconPath: string;
    readonly _opinionTopicModifier: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._ceoEffectList = values["ceo_effect_list"];
      this.pointChangePerTurnIfActive = values["point_change_per_turn_if_active"];
      this.title = values["title"];
      this.description = values["description"];
      this.iconPath = values["icon_path"];
      this._opinionTopicModifier = values["opinion_topic_modifier"];
    }
    
    get ceoEffectList(): CeoEffectLists.Entry | undefined {
      const collection = <CeoEffectLists.Entry[]>this.collectionCache.getCollection(CeoEffectLists.KEY, CeoEffectLists.Entry);
      return collection.find(entry => entry.key === this._ceoEffectList);
    }
    
    get opinionTopicModifier(): CharacterRelationshipOpinionTopicSets.Entry | undefined {
      const collection = <CharacterRelationshipOpinionTopicSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipOpinionTopicSets.KEY, CharacterRelationshipOpinionTopicSets.Entry);
      return collection.find(entry => entry.key === this._opinionTopicModifier);
    }
  }
}

export default CeoNodes;
