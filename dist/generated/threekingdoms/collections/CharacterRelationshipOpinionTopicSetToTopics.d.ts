import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationshipOpinionTopicSets } from "./CharacterRelationshipOpinionTopicSets";
import { CharacterRelationshipOpinionTopics } from "./CharacterRelationshipOpinionTopics";
import { CharacterRelationshipOpinionTypes } from "./CharacterRelationshipOpinionTypes";
export declare namespace CharacterRelationshipOpinionTopicSetToTopics {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _topicSet: string;
        readonly _topic: string;
        readonly _opinionType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get topicSet(): CharacterRelationshipOpinionTopicSets.Entry | undefined;
        get topic(): CharacterRelationshipOpinionTopics.Entry | undefined;
        get opinionType(): CharacterRelationshipOpinionTypes.Entry | undefined;
    }
}
export default CharacterRelationshipOpinionTopicSetToTopics;
