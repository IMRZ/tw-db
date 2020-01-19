
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterRelationshipOpinionTopics {
  export const KEY = new CollectionKey("character_relationship_opinion_topics");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly agreementWeight: number;
    readonly disagreementWeight: number;
    readonly likeIsWeight: number;
    readonly dislikeIsWeight: number;
    readonly agreementTitle: string;
    readonly disagreementTitle: string;
    readonly agreementDescription: string;
    readonly disagreementDescription: string;
    readonly likeIsTitle: string;
    readonly likeIsDescription: string;
    readonly dislikeIsTitle: string;
    readonly dislikeIsDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.agreementWeight = values["agreement_weight"];
      this.disagreementWeight = values["disagreement_weight"];
      this.likeIsWeight = values["like_is_weight"];
      this.dislikeIsWeight = values["dislike_is_weight"];
      this.agreementTitle = values["agreement_title"];
      this.disagreementTitle = values["disagreement_title"];
      this.agreementDescription = values["agreement_description"];
      this.disagreementDescription = values["disagreement_description"];
      this.likeIsTitle = values["like_is_title"];
      this.likeIsDescription = values["like_is_description"];
      this.dislikeIsTitle = values["dislike_is_title"];
      this.dislikeIsDescription = values["dislike_is_description"];
    }
    
  }
}

export default CharacterRelationshipOpinionTopics;
