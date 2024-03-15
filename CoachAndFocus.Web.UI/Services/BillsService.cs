using CoachAndFocus.Web.UI.Models;
using Newtonsoft.Json;

namespace CoachAndFocus.Web.UI.Services
{
    public class BillsService : IBillsService
    {
        public async Task<BillsData> GetLatestBillsASync()
        {
            var url = "https://bills-api.parliament.uk/api/v1/Bills?SortOrder=DateUpdatedDescending&skip=0&take=20";
            var client = new HttpClient();
            var data = await client.GetStringAsync(url);
            var billsData = JsonConvert.DeserializeObject<BillsData>(data);
            return  billsData;
        }
    }
}
