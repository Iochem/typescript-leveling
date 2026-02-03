import {User} from "./user"
import {ValidationReturn} from "./validationReturn"
import {AgeStatus} from "./ageStatus";

export class AgeApprovalService { // Rule/behavior

    approve (user:User): ValidationReturn  {
        //Verify only valid ages
        if(user.age <= 0 || user.age > 120){
            throw new Error("Invalid age: " + user.age);
        }

        // Approve adults and reprove minors
        const status = this.decideStatus(user.age);

        return{
            name: user.name,
            age: user.age,
            status,
        }
    }

    // Decision
    private decideStatus(age: number): AgeStatus{
        return age < 18 ? "BLOCKED" : "ACCEPTED";
    }
}