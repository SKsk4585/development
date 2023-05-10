import express, { NextFunction, Request, Response, response } from "express"
import developmentLogic from "../5-logic/development Logic"
import MeetingsModel from "../4-models/meetingsModel"

const router = express.Router()

//get all development
router.get("/get-all-dev", async(request:Request, response:Response,next:NextFunction)=>{
    try {
        const dev = await developmentLogic.getaAllDevelopment()
        response.json(dev)
        
    } 
    catch (error) {
        next(error)
        
    }
})


//get all meeting by dvelopment id
router.get("/get-all-meeting-by-dev-id/:categoryId", async(request:Request, response:Response,next:NextFunction)=>{
    try {
        const devId = +request.params.devId
        const meeting = await developmentLogic.getaAllMeetingbyDevId(devId)
        response.json(meeting)
        
    } 
    catch (error) {
        next(error)
        
    }
})

//add book
router.post("/add-meeting", async(request:Request,response:Response,next:NextFunction)=>{
    try {
       const meet = new MeetingsModel(request.body)
       const addedMeet = await developmentLogic.addMeeting(meet)
       response.status(201).json(addedMeet)
    } 
    catch (error) {
        next(error)
        
    }
})



export default router