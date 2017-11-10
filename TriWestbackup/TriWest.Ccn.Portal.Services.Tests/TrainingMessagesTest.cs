using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.EntityFrameworkCore;
using TriWest.Ccn.Portal.Services.Demo;
using System.Linq;
using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace TriWest.Ccn.Portal.Services.Tests
{
    [TestClass]
    public class TrainingMessagesTest
    {
        // Arrange
        public TrainingMessagesTest()
        {
            InitContext();
        }

        private CcnPortalDbContext _dbContext;

        public void InitContext()
        {
            var builder = new DbContextOptionsBuilder<CcnPortalDbContext>()
                .UseInMemoryDatabase();
            var baseDate = DateTime.Now;
            var context = new CcnPortalDbContext(builder.Options);            
            context.TrainingMessages.AddRange(
                    new TrainingMessage
                    {
                        Id = 10,
                        Title = "Windstrom",
                        Message = "<p>We invite you to hear firsthand what our physicians, medical experts and patients have to say about the cutting-edge procedures, " +
                                "innovative treatments and quality of care that happen on a daily basis here. <a target=\"_blank\" href=\"www.triwest.com\">www.triwest.com</a> </p>",
                        CreatedOn = baseDate.AddDays(0).Date
                    },
                     new TrainingMessage
                     {
                         Id = 11,
                         Title = "PCT Training",
                         Message = "<p>Students who complete and successfully pass the PCT Tech training course can work as a Patient Care Technician in any healthcare facilities " +
                         "such as laboratories, hospitals, blood banks, private phlebotomy services, doctors offices, clinics, etc..   . <a target=\"_blank\" href=\"www.triwest.com\">www.triwest.com</a> </p>",
                         CreatedOn = baseDate.AddDays(-2).Date
                     },
                      new TrainingMessage
                      {
                          Id = 12,
                          Title = "Windstrom 2",
                          Message = "<p>An individual, who assist physicians in diagnosing as well as treating heart or cardiac, and blood vessel or peripheral vascular ailments. " +
                          "They are also referred to as cardiovascular technicians or electrocardiograph technician.  They operate and are responsible for the total care of test devices or equipments. " +
                          "They also explain procedures and processes to patients, and compare findings to the standards to determine any problems. <a target=\"_blank\" href=\"www.triwest.com\">www.triwest.com</a> </p>",
                          CreatedOn = baseDate.AddDays(-3).Date
                      }

                );
            int changed = context.SaveChanges();
            _dbContext = context;
        }

             

        [TestMethod]
        public void TrainingMessagesController_should_return_latest_message()
        {
            //Act
            var controller = new TrainingMessagesController(_dbContext);
            IActionResult actionResult = controller.Get();

            var okObjectResult = actionResult as OkObjectResult;
            var model = okObjectResult.Value as TrainingMessage;                       

            // Assert
            Assert.IsInstanceOfType(actionResult, typeof(OkObjectResult));
            Assert.IsNotNull(actionResult);

            int actual = model.Id;
            Assert.AreEqual(10, actual);            
        }       
    }

}
