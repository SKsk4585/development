class MeetingsModel{
    public meetingsId:number
    public DevelopmentGrouplId:number
    public DateTimeOfStert:string
    public DateTimeOfEnd:string
    public Description:string
    public MeetingRoom:string
    

    public constructor (meet: MeetingsModel){
        this.meetingsId = meet.meetingsId
        this.DevelopmentGrouplId = meet.DevelopmentGrouplId
        this.DateTimeOfStert = meet.DateTimeOfStert
        this.DateTimeOfEnd = meet.DateTimeOfEnd
        this.Description = meet.Description
        this.MeetingRoom = meet.MeetingRoom
    }
}

export default MeetingsModel