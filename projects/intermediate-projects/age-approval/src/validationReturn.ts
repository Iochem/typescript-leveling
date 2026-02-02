import {AgeStatus} from "./ageStatus"

export type ValidationReturn = { // shape
    name: string;
    age: number;
    status: AgeStatus;
}