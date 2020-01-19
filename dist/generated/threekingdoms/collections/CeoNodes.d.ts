import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEffectLists } from "./CeoEffectLists";
import { CharacterRelationshipOpinionTopicSets } from "./CharacterRelationshipOpinionTopicSets";
export declare namespace CeoNodes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _ceoEffectList: string;
        readonly pointChangePerTurnIfActive: number;
        readonly title: string;
        readonly description: string;
        readonly iconPath: string;
        readonly _opinionTopicModifier: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ceoEffectList(): CeoEffectLists.Entry | undefined;
        get opinionTopicModifier(): CharacterRelationshipOpinionTopicSets.Entry | undefined;
    }
}
export default CeoNodes;
