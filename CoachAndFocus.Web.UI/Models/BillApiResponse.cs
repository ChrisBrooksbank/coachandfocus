namespace CoachAndFocus.Web.UI.Models
{
    public class BillApiResponse<T>
    {
        public IEnumerable<T> Items { get; set; }
        public int TotalResults { get; set; }
        public int ItemsPerPage { get; set; }
    }
}
