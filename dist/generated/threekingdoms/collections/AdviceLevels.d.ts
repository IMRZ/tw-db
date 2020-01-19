import { CollectionCache, CollectionKey } from "../../../common";
import { AdviceThreads } from "./AdviceThreads";
import { Advisors } from "./Advisors";
export declare namespace AdviceLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _adviceThread: string;
        readonly adviceThreadLevel: number;
        readonly pointsNeeded: number;
        readonly gameArea: string;
        readonly category: string;
        readonly subCategory: string;
        readonly maxRepeatCount: number;
        readonly repeatInterval: number;
        readonly pauseBattle: boolean;
        readonly adviceItemTitle: string;
        readonly priorityLevel: number;
        readonly highVerbosityOnly: boolean;
        readonly locatable: boolean;
        readonly parameter: string;
        readonly onDisplayScript: string;
        readonly onClickScript: string;
        readonly suppressible: boolean;
        readonly uninhibitable: boolean;
        readonly audioClip: string;
        readonly onscreenText: string;
        readonly _advisorName: string;
        readonly forLoadingScreen: boolean;
        readonly movieLink: string;
        constructor(collectionCache: CollectionCache, values: any);
        get adviceThread(): AdviceThreads.Entry | undefined;
        get advisorName(): Advisors.Entry | undefined;
    }
}
export default AdviceLevels;
