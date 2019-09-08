import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
export declare namespace Plagues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly grade: number;
        readonly minimumSqualor: number;
        readonly infectivity: number;
        readonly lifetime: number;
        readonly _regionEffectBundle: string;
        readonly _militaryForceEffectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly regionEffectBundle: EffectBundles.Entry | undefined;
        readonly militaryForceEffectBundle: EffectBundles.Entry | undefined;
    }
}
export default Plagues;
