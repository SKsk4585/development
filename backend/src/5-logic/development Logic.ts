import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import DevelopmentGroupModel from "../4-models/developmentGroupModel";
import MeetingsModel from "../4-models/meetingsModel";




async function getaAllDevelopment():Promise<DevelopmentGroupModel[]>{
    const sql = `SELECT * FROM developmentgoup `
    const ampm = await dal.execute(sql)
    return ampm
}


async function getaAllMeetingbyDevId (developmentgroupId:number):Promise<MeetingsModel[]>{
    const sql = `SELECT M.*, D.developmentgroupName
                 FROM meetingd AS M JOIN developmentgroup AS D
                 ON M.developmentgroupId = D.DevelopmentGrouplId
                 WHERE M.developmentgroupId = ${developmentgroupId}`
    const ampm = await dal.execute(sql)
    return ampm
}



async function addMeeting(meeting:MeetingsModel):Promise<MeetingsModel>{
    const sql = `INSERT INTO ampmstore
                VALUES(DEFAULT,
                        ${meeting.DevelopmentGrouplId},
                        "${meeting.DateTimeOfStert}",
                        "${meeting.DateTimeOfEnd}",
                        "${meeting.Description}",
                        ${meeting.MeetingRoom}                       
                        
                        )`
    const info:OkPacket = await dal.execute(sql)
    meeting.meetingsId = info.insertId
    return meeting
}





export default {
    getaAllDevelopment,
    getaAllMeetingbyDevId,
    addMeeting

}