import {AgeApprovalService} from "./AgeApprovalService"
import {User} from "./user"

const ageA = new AgeApprovalService();

try{
    const user1: User = { name: "Bryan", age: 15 };
    const user2: User = { name: "Vivian", age: 40 };
    const user3: User = { name: "Carla", age: 20 };
    const user4: User = { name: "Bryana", age: 0 };

    //Testing aproval
    console.log(ageA.approve(user1));
    console.log(ageA.approve(user2));
    console.log(ageA.approve(user3));
    console.log(ageA.approve(user4));

} catch(error){
    if (error instanceof Error) {
        console.log(error.message);
    }
}

