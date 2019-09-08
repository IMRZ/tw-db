import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PoliticsGovernmentActions } from "./PoliticsGovernmentActions";
export declare namespace FactionPoliticsGovernmentActionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _faction: string;
        readonly _type: string;
        readonly imagePath: string;
        readonly title: string;
        readonly description: string;
        readonly cost: number;
        readonly costPerRegion: number;
        readonly cooldown: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly type: PoliticsGovernmentActions.Entry | undefined;
    }
}
export default FactionPoliticsGovernmentActionsJunctions;
