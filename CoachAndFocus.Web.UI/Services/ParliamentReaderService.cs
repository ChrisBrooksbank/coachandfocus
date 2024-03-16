namespace CoachAndFocus.Web.UI.Services
{
    public class ParliamentReaderService : IParliamentReaderService
    {
        
        public async Task<string> GetLatestBillsAsync()
        {
           return await new HttpClient().GetStringAsync("https://bills-api.parliament.uk/api/v1/Bills?SortOrder=DateUpdatedDescending&skip=0&take=20");
        }
        
        public async Task<string> GetLatestEarlyDayMotionsAsync()
        {
            return await new HttpClient().GetStringAsync("https://oralquestionsandmotions-api.parliament.uk/EarlyDayMotions/list?parameters.orderBy=DateTabledDesc?skip=0&take=20");
        }
    }
}
