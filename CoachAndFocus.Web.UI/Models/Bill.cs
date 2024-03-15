namespace CoachAndFocus.Web.UI.Models
{
    public class Bill
    {
        public int BillId { get; set; }
        public string ShortTitle { get; set; }
        public string CurrentHouse { get; set; }
        public string OriginatingHouse { get; set; }
        public DateTime LastUpdate { get; set; }
        public object BillWithdrawn { get; set; }
        public bool IsDefeated { get; set; }
        public int BillTypeId { get; set; }
        public int IntroducedSessionId { get; set; }
        public int[] IncludedSessionIds { get; set; }
        public bool IsAct { get; set; }
        public BillStage CurrentStage { get; set; }
    }
}
