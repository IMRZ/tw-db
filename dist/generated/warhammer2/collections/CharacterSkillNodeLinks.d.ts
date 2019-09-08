import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkillNodes } from "./CharacterSkillNodes";
import { CharacterSkillNodeLinkTypes } from "./CharacterSkillNodeLinkTypes";
export declare namespace CharacterSkillNodeLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _parentKey: string;
        readonly _childKey: string;
        readonly initialDescentTiers: number;
        readonly parentLinkPosition: number;
        readonly childLinkPosition: number;
        readonly parentLinkPositionOffset: number;
        readonly childLinkPositionOffset: number;
        readonly _linkType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly parentKey: CharacterSkillNodes.Entry | undefined;
        readonly childKey: CharacterSkillNodes.Entry | undefined;
        readonly linkType: CharacterSkillNodeLinkTypes.Entry | undefined;
    }
}
export default CharacterSkillNodeLinks;
