namespace CoachAndFocus.Web.UI.Models
{
    public class BillStage
    {
        public int Id { get; set; }
        public int StageId { get; set; }
        public int SessionId { get; set; }
        public string Description { get; set; }
        public string Abbreviation { get; set; }
        public string House { get; set; }
    }
}
