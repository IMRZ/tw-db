import { CollectionCache, CollectionKey } from "../../../common";
import { TraitTriggers } from "./TraitTriggers";
import { TraitInfo } from "./TraitInfo";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace TriggerEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _trigger: string;
        readonly _trait: string;
        readonly value: number;
        readonly chance: number;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly trigger: TraitTriggers.Entry | undefined;
        readonly trait: TraitInfo.Entry | undefined;
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default TriggerEffects;
