using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.EntityFrameworkCore;
using TriWest.Ccn.Portal.Services.Demo;

using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;

namespace TriWest.Ccn.Portal.Services.Tests
{
    [TestClass]
    public class CsrInteractionControllerTests
    { // Arrange
        public CsrInteractionControllerTests()
        {
            InitContext();
            InitServices();
        }

        private CcnDbContext _dbContext;
        private ILogger<CsrInteractionsController> _logger;

        public void InitContext()
        {
            var builder = new DbContextOptionsBuilder<CcnDbContext>()
                .UseInMemoryDatabase();
            var baseDate = DateTime.Now;
            var context = new CcnDbContext(builder.Options);
            _dbContext = context;
        }

        public void InitServices()
        {
            var serviceProvider = new ServiceCollection()
                .AddLogging()
                .BuildServiceProvider();

            var factory = serviceProvider.GetService<ILoggerFactory>();
            factory.AddDebug();

            _logger = factory.CreateLogger<CsrInteractionsController>();
        }

        private void SimulateValidation(CsrInteraction model, CsrInteractionsController controller)
        {
            // mimic the behaviour of the model binder which is responsible for Validating the Model
            var validationContext = new ValidationContext(model, null, null);
            var validationResults = new List<ValidationResult>();
            Validator.TryValidateObject(model, validationContext, validationResults, true);
            foreach (var validationResult in validationResults)
            {
                controller.ModelState.AddModelError(validationResult.MemberNames.First(), validationResult.ErrorMessage);
            }
        }

        [TestMethod]
        public void CsrInteractionController_should_save()
        {
            //arrange
            var insertedPhoneNumber = "5555555555";
            var insertedSessionNote = "Test Note 5";

            var input = new CsrInteraction();
            input.SessionNote = insertedSessionNote;
            input.TimerStart = DateTime.UtcNow;
            input.Phone = insertedPhoneNumber;

            //Act
            var controller = new CsrInteractionsController(_dbContext, _logger);
            SimulateValidation(input, controller);
            IActionResult actionResult = controller.Post(input);

            var result = actionResult as CreatedResult;
            var model = result.Value as CsrInteraction;

            // Assert
            Assert.IsInstanceOfType(actionResult, typeof(CreatedResult));
            Assert.IsNotNull(actionResult);

            string resultingSessionNote = model.SessionNote;
            Assert.AreEqual(insertedSessionNote, resultingSessionNote);
        }


        [TestMethod]
        public void CsrInteractionController_rejects_bad_phone()
        {
            //arrange
            var inputString = "Test Note 5";
            var input = new CsrInteraction();
            input.SessionNote = inputString;
            input.TimerStart = DateTime.UtcNow;
            input.Phone = "12345678901";

            //for WebApi validation context approach in unit tests for validation look at this
            //https://stackoverflow.com/questions/37558049/modelstate-isvalid-always-true-when-testing-controller-in-asp-net-mvc-web-api

            //Act
            var controller = new CsrInteractionsController(_dbContext, _logger);
            SimulateValidation(input, controller);
            IActionResult actionResult = controller.Post(input);

            var result = actionResult as BadRequestObjectResult;
            var validationError = result.Value as SerializableError;
            string[] validationmessages = null;
            object messageReceived = string.Empty;
            if (validationError != null)
            {
                validationmessages = validationError.FirstOrDefault().Value as string[];
            }

            // Assert
            Assert.IsInstanceOfType(actionResult, typeof(BadRequestObjectResult));
            Assert.IsNotNull(actionResult);

            string validationMessage = "Invalid Phone number";
            if (validationmessages != null) Assert.AreEqual((object) validationMessage, validationmessages[0]);
        }
    }

}
