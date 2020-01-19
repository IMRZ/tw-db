import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterRelationshipOpinionTopics {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterRelationshipOpinionTopics;
