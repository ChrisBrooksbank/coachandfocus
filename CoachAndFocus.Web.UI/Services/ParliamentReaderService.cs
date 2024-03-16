namespace CoachAndFocus.Web.UI.Services
{
    public class ParliamentReaderService : IParliamentReaderService
    {
        public async Task<string> GetLatestBillsASync()
        {
           return await new HttpClient().GetStringAsync("https://bills-api.parliament.uk/api/v1/Bills?SortOrder=DateUpdatedDescending&skip=0&take=20");
        }
    }
}
