import {CacheService} from "./CacheService"

const cache = new CacheService();

cache.add("user_1", "Brenda");
cache.add("user_2", "Carla");

console.log(cache.get("user_1"));
console.log(cache.get("user_2"));