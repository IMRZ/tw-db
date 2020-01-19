import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace ResourceUiOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _sourceResource: string;
        readonly _targetResource: string;
        readonly _overrideFaction: string;
        readonly _overrideSubculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get sourceResource(): Resources.Entry | undefined;
        get targetResource(): Resources.Entry | undefined;
        get overrideFaction(): Factions.Entry | undefined;
        get overrideSubculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default ResourceUiOverrides;
