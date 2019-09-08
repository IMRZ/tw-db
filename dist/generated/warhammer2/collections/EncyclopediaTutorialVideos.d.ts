import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaTutorialSections } from "./EncyclopediaTutorialSections";
export declare namespace EncyclopediaTutorialVideos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly title: string;
        readonly _section: string;
        readonly file: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly section: EncyclopediaTutorialSections.Entry | undefined;
    }
}
export default EncyclopediaTutorialVideos;
