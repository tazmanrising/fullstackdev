using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TriWest.Ccn.Portal.Common.HelperModels;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Controllers;
using TriWest.Ccn.Portal.Services.Demo;

namespace TriWest.Ccn.Portal.Services.Tests
{

    [TestClass]
    public class ContactTypesControllerTests 
    {
        private CcnDbContext _dbContext;
        private ILogger<ContactTypesController> _logger;

        public void InitContext(string optionalDb = "normal")
        {
            var builder = new DbContextOptionsBuilder<CcnDbContext>()
                .UseInMemoryDatabase(optionalDb);

            var context = new CcnDbContext(builder.Options);

            context.ContactTypes.AddRange(
                new ContactType
                {
                    ContactTypeId = 1,
                    ContactTypeName = "Call"
                },new ContactType
                {
                    ContactTypeId = 2,
                    ContactTypeName = "Chat"
                }

            );

            context.SaveChanges();
            _dbContext = context;

        }

        public void InitServices()
        {
            var serviceProvider = new ServiceCollection()
                .AddLogging()
                .BuildServiceProvider();

            var factory = serviceProvider.GetService<ILoggerFactory>();
            factory.AddDebug();

            _logger = factory.CreateLogger<ContactTypesController>();
        }

        [TestMethod]
        public void ContactTypesController_should_get_contacts()
        {
            InitContext();
            InitServices();

            int id;
            var controller = new ContactTypesController(_dbContext, _logger);
            var actionResult = controller.Get();
            var okObjectResult = actionResult as OkObjectResult;
            var model = okObjectResult.Value as List<ContactType>;
            id = model[0].ContactTypeId;

            Assert.IsNotNull(okObjectResult);
            Assert.AreEqual(200, okObjectResult.StatusCode);
            Assert.IsTrue(id > 0, "Testing for Notification Records");



        }



    }
}
