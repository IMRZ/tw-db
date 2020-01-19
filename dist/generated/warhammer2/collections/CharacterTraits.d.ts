import { CollectionCache, CollectionKey } from "../../../common";
import { TraitInfo } from "./TraitInfo";
import { TraitCategories } from "./TraitCategories";
import { PreBattleSpeechParametersEnum } from "./PreBattleSpeechParametersEnum";
export declare namespace CharacterTraits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly noGoingBackLevel: number;
        readonly hidden: boolean;
        readonly precedence: number;
        readonly _icon: string;
        readonly author: string;
        readonly comment: string;
        readonly _preBattleSpeechParameter: string;
        readonly uiPriority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): TraitInfo.Entry | undefined;
        get icon(): TraitCategories.Entry | undefined;
        get preBattleSpeechParameter(): PreBattleSpeechParametersEnum.Entry | undefined;
    }
}
export default CharacterTraits;
