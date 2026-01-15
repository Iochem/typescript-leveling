import {CacheStorage} from "./CacheStorage"
import {CacheItem} from "./CacheItem"


/*
Cache service layer.
Acts as an abstraction between application code and cache storage.
 */

export class CacheService {
    private storage: CacheStorage;

    constructor(){
        this.storage = new CacheStorage();
    }

    // Adds a new key-value pair to the cache.
    add(key: string, value: string): void{
        const item = new CacheItem(key, value);
        this.storage.add(item
        );
    }

    // Retrieves a cached value by key.
    get(key: string): string | undefined {
        const item = this.storage.findByKey(key);
        return item?.getValue(); // Returns undefined if the key does not exist.
    }

}