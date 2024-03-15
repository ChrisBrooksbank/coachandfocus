using CoachAndFocus.Web.UI.Models;

namespace CoachAndFocus.Web.UI.Services
{
    public class BillsService : IBillsService
    {
        public Task<List<Bill>> GetLatestBillsASync()
        {
            var bills = new List<Bill>()
            {
                new Bill{ BillId = 1, ShortTitle = "Test Bill 1"},
                new Bill{ BillId = 2, ShortTitle = "Test Bill 2"},
                new Bill{ BillId = 3, ShortTitle = "Test Bill 3"}
            };
            return Task.FromResult(bills);
        }
    }
}
