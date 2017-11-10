using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.EntityFrameworkCore;
using TriWest.Ccn.Portal.Services.Demo;
using System.Linq;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace TriWest.Ccn.Portal.Services.Tests
{
    [TestClass]
    public class BannersControllerTest
    {
        private CcnPortalDbContext _dbContext;
        private ILogger<BannersController> _logger;
        public BannersControllerTest()
        {
            InitContext();
            InitServices();
        }

        public void InitServices()
        {
            var serviceProvider = new ServiceCollection()
                .AddLogging()
                .BuildServiceProvider();

            var factory = serviceProvider.GetService<ILoggerFactory>();
            factory.AddDebug();

            _logger = factory.CreateLogger<BannersController>();
        }
        public void InitContext()
        {
            var builder = new DbContextOptionsBuilder<CcnPortalDbContext>()
                .UseInMemoryDatabase();
            var baseDate = DateTime.Now;
            var context = new CcnPortalDbContext(builder.Options);
            context.Banners.AddRange(
                    new Banner
                    {
                        Id = 4,
                        Source = "http://www.triwest.com//globalassets/images/slider-images/slider-2017-1-millionth-veteran.jpg",
                        Alternate="one million unique veterans",
                        Header= "One Million Veterans Served!",
                        Message = "<p>Thank you, TriWest providers, for serving <em><strong>1 million unique Veterans</strong></em> in our 28 state territory. You and your nearly 200,000 fellow network providers have scheduled more than 5 million appointments for our nation's heroes.</p>",

                    }
                    
                );
            int changed = context.SaveChanges();
            _dbContext = context;
        }


        [TestMethod]
        public void BannersController_T_should_return_banner_data()
        {
            //Act
            var controller = new BannersController(_dbContext, _logger);
            IActionResult actionResult = controller.Get();

            var okObjectResult = actionResult as OkObjectResult;
            var model = okObjectResult.Value as List<Banner>;

            // Assert
            Assert.IsInstanceOfType(actionResult, typeof(OkObjectResult));
            Assert.IsNotNull(actionResult);

            int actual = model[0].Id;
            Assert.AreEqual(4, actual);
        }
    }

}
