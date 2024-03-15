namespace CoachAndFocus.Web.UI.Models
{
    public class StageSitting
    {
        public int Id { get; set; }
        public int StageId { get; set; }
        public int BillStageId { get; set; }
        public int BillId { get; set; }
        public DateTime Date { get; set; }
    }
}
