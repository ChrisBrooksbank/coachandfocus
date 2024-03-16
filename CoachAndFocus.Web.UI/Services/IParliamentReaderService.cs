namespace CoachAndFocus.Web.UI.Services
{
    public interface IParliamentReaderService
    {
        Task<string> GetLatestBillsASync();
    }
}
