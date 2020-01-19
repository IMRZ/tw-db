import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
export declare namespace PrologueLoadingScreens {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly index: number;
        readonly title: string;
        readonly mainText: string;
        readonly insetImage: string;
        readonly backgroundImage: string;
        readonly paneOnLeft: boolean;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default PrologueLoadingScreens;
