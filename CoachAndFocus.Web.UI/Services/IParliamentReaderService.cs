namespace CoachAndFocus.Web.UI.Services
{
    public interface IParliamentReaderService
    {
        Task<string> GetLatestBillsAsync();
        Task<string> GetLatestEarlyDayMotionsAsync();
    }
}
