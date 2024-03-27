import prisma from "../../prisma.js";
import { verifyToken } from "./auth.js";

const protectedRoute = async (req, res, next) => {
    try {
        const auth_token = req.cookies.auth_token;
        if(!auth_token) {
            return res.status(401).send({ status: 'fail', message: 'no auth token provided'}).end()
        }
        const data = verifyToken(auth_token);
        const user = await prisma.user.findUnique({
            where: {
                id: data.id
            }
        })
        if(!user) {
            return res.status(401).send({ status: 'fail', message: 'no user found'}).end() 
        }
        req.session.user = user;
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).send({ status: 'fail', message: error.message}).end()
    }
}

export default protectedRoute;