import {CacheItem} from "./CacheItem"

/*
In-memory cache storage.
Responsible only for storing and retrieving CacheItem objects.
 */

export class CacheStorage {
    private items : CacheItem[] = []; // Internal in-memory storage

    // Adds a new cache item to storage.
    add(item : CacheItem){
        this.items.push(item);
    }

    // Searches for a cache item by its key.
    findByKey(key: string): CacheItem | undefined {
        return this.items.find(item => item.key === key);
    }
}