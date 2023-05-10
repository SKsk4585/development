class DevelopmentGroupModel{
    public DevelopmentGrouplId:number
    public DevelopmentGroupName:string

    public constructor (group: DevelopmentGroupModel){
        this.DevelopmentGrouplId = group.DevelopmentGrouplId
        this.DevelopmentGroupName = group.DevelopmentGroupName
    }
}

export default DevelopmentGroupModel