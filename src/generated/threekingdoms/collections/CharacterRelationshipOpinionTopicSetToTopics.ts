
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipOpinionTopicSets } from "./CharacterRelationshipOpinionTopicSets";
import { CharacterRelationshipOpinionTopics } from "./CharacterRelationshipOpinionTopics";
import { CharacterRelationshipOpinionTypes } from "./CharacterRelationshipOpinionTypes";

export namespace CharacterRelationshipOpinionTopicSetToTopics {
  export const KEY = new CollectionKey("character_relationship_opinion_topic_set_to_topics");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _topicSet: string;
    readonly _topic: string;
    readonly _opinionType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._topicSet = values["topic_set"];
      this._topic = values["topic"];
      this._opinionType = values["opinion_type"];
    }
    
    get topicSet(): CharacterRelationshipOpinionTopicSets.Entry | undefined {
      const collection = <CharacterRelationshipOpinionTopicSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipOpinionTopicSets.KEY, CharacterRelationshipOpinionTopicSets.Entry);
      return collection.find(entry => entry.key === this._topicSet);
    }
    
    get topic(): CharacterRelationshipOpinionTopics.Entry | undefined {
      const collection = <CharacterRelationshipOpinionTopics.Entry[]>this.collectionCache.getCollection(CharacterRelationshipOpinionTopics.KEY, CharacterRelationshipOpinionTopics.Entry);
      return collection.find(entry => entry.key === this._topic);
    }
    
    get opinionType(): CharacterRelationshipOpinionTypes.Entry | undefined {
      const collection = <CharacterRelationshipOpinionTypes.Entry[]>this.collectionCache.getCollection(CharacterRelationshipOpinionTypes.KEY, CharacterRelationshipOpinionTypes.Entry);
      return collection.find(entry => entry.id === this._opinionType);
    }
  }
}

export default CharacterRelationshipOpinionTopicSetToTopics;
