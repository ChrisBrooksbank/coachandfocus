using CoachAndFocus.Web.UI.Models;

namespace CoachAndFocus.Web.UI.Services
{
    public interface IBillsService
    {
        Task<BillsData> GetLatestBillsASync();
    }
}
