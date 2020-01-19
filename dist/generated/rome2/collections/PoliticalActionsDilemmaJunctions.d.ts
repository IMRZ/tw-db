import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalActions } from "./PoliticalActions";
import { Dilemmas } from "./Dilemmas";
export declare namespace PoliticalActionsDilemmaJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _politiicalAction: string;
        readonly _dilemma: string;
        readonly weighting: number;
        constructor(collectionCache: CollectionCache, values: any);
        get politiicalAction(): PoliticalActions.Entry | undefined;
        get dilemma(): Dilemmas.Entry | undefined;
    }
}
export default PoliticalActionsDilemmaJunctions;
