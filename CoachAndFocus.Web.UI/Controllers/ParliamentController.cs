using CoachAndFocus.Web.UI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CoachAndFocus.Web.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ParliamentController : ControllerBase
    {
        private readonly ILogger<ParliamentController> _logger;
        private readonly IParliamentReaderService _parliamentReaderService;

        public ParliamentController(ILogger<ParliamentController> logger, IParliamentReaderService parliamentReaderService)
        {
            _logger = logger;
            _parliamentReaderService = parliamentReaderService;
        }

        [HttpGet]
        [Route("Bills")]
        public async Task<string> Bills() => await _parliamentReaderService.GetLatestBillsAsync();

         [HttpGet]
        [Route("EarlyDayMotions")]
        public async Task<string> EarlyDayMotions() => await _parliamentReaderService.GetLatestEarlyDayMotionsAsync();
    }

}
