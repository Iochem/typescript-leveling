import {User} from "./user"
import {ValidationReturn} from "./validationReturn"
import {AgeStatus} from "./ageStatus";

export class AgeApprovalService { // Rule/behavior

    constructor(private readonly minAge: number = 18) {}

    approve (user:User): ValidationReturn  {
        //Verify only valid ages
        if(user.age <= 0 || user.age > 120){
            throw new Error("Invalid age: " + user.age);
        }

        // Approve adults and reprove minors
        const status = this.decideStatus(user.age);

        //Decide what's reason will be return
        const reason = this.deciseReason(user.age);

        return{
            name: user.name,
            age: user.age,
            status,
            reason,
        }
    }

    // Decision
    private decideStatus(age: number): AgeStatus{
        return age < this.minAge ? "BLOCKED" : "ACCEPTED";
    }

    //Reason
    private deciseReason(age: number){
        return age < this.minAge ? "User is under minimum age" : "User is allowed";

    }
}