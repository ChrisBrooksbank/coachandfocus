using CoachAndFocus.Web.UI.Models;
using CoachAndFocus.Web.UI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CoachAndFocus.Web.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BillsController : ControllerBase
    {
        private readonly ILogger<BillsController> _logger;
        private readonly IBillsService _billsService;

        public BillsController(ILogger<BillsController> logger, IBillsService billsService)
        {
            _logger = logger;
            _billsService = billsService;
        }

        [HttpGet]
        public async Task<BillsData> Get()
        {
            return await _billsService.GetLatestBillsASync();
        }
    }
}
