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
using TriWest.Ccn.Portal.Services.Controllers;
using TriWest.Ccn.Portal.Services.Demo;

namespace TriWest.Ccn.Portal.Services.Tests
{
    [TestClass]
    public class NotificationsControllerTests
    {
   
        private CcnPortalDbContext _dbContext;
        private ILogger<NotificationsController> _logger;
       
        public void InitContext(string optionalDb = "normal" )
        {
            var builder = new DbContextOptionsBuilder<CcnPortalDbContext>()
                .UseInMemoryDatabase(optionalDb);
   
            var context = new CcnPortalDbContext(builder.Options);

            context.Notifications.AddRange(
                new Notification
                {
                    Id = 5,
                    Date = DateTime.Now,
                    Contact = "PHONE",
                    Customer = "PROVIDER",
                    Name = "Dr. Justin Smyth",
                    Phone = "(602) 264 -5978",
                    Category = "MED DOCS",
                    Notes = "Provider called to say that an extension needs to be approved"
                }
                ,
                new Notification
                {
                    Id = 6,
                    Date = DateTime.Now,
                    Contact = "Email",
                    Customer = "Other",
                    Name = "Dr. Banner",
                    Phone = "(480) 264-5978",
                    Category = "VET DOCS",
                    Notes = "Doctor approved the knew surgery"
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

            _logger = factory.CreateLogger<NotificationsController>();
        }

        [TestMethod]
        public void NotificationController_should_get_1_specific_notification()
        {


            InitContext("other");
            InitServices();
            //Arrange
            int id;
            //Act
            var controller = new NotificationsController(_dbContext, _logger);
            var actionResult = controller.Get(6);
            var okObjectResult = actionResult as OkObjectResult;
            var model = okObjectResult.Value as Notification;
            id = model.Id;
            //Assert
            Assert.IsNotNull(okObjectResult);
            Assert.AreEqual(200, okObjectResult.StatusCode);
            Assert.AreEqual(6, id);
            
        }
        
        [TestMethod]
        public void NotificationController_should_return_notifications()
        {

            InitContext();
            InitServices();
            //Arrange
            var id = 0;
            
            //Act
            var controller = new NotificationsController(_dbContext, _logger);
            var result = controller.Get(1, 500);
            var okResult = result as OkObjectResult;
    
            if (okResult != null && okResult.Value is PageResult<Notification> model)
            {
                var modelTest = model.Results.ToList();
                var one = modelTest[0];
                id = one.Id;
            }
            
            //Assert
            Assert.IsNotNull(okResult);
            Assert.AreEqual(200, okResult.StatusCode);
            Assert.IsTrue(id > 0, "Testing for Notification Records");
            
        }
        


    }

}
