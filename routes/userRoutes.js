import {Router} from "express"
const router = Router()
const user = prisma.users.get(id);
const id = req.param.id;
    if(user.role === 'admin'){

    }
else {
    throw new Error("You dont have permission to perform");
}