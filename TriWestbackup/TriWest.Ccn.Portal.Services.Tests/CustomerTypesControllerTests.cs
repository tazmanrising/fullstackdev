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
    public class CustomerTypesControllerTests
    {

        private CcnDbContext _dbContext;
        private ILogger<CustomerTypesController> _logger;

        public void InitContext(string optionalDb = "normal")
        {
            var builder = new DbContextOptionsBuilder<CcnDbContext>()
                .UseInMemoryDatabase(optionalDb);

            var context = new CcnDbContext(builder.Options);

            context.CustomerTypes.AddRange(
                new CustomerType
                {
                    CustomerTypeId = 1,
                    CustomerTypeName = "VAMC",
                    ChildCategories = new List<Category>

                    {
                        new Category
                        {
                            CategoryId = 1,
                            CategoryName = "VAMC-Cat-1",
                            CustomerTypeId = 1,
                            ChildSubCategories = new List<SubCategory>()
                            {
                                new SubCategory
                                {
                                    SubCategoryId = 1,
                                    SubCategoryName = "VAMC-SubCat-1-1",
                                    CategoryId = 1
                                }
                            }
                        }
                    }
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

            _logger = factory.CreateLogger<CustomerTypesController>();
        }

        [TestMethod]
        public void CustomerTypesController_should_get_customers()
        {
            InitContext("first");
            InitServices();
            string subCategoryName;
            var controller = new CustomerTypesController(_dbContext, _logger);
            var actionResult = controller.Get();
            var okObjectResult = actionResult as OkObjectResult;
            var model = okObjectResult.Value as List<CustomerType>;
            subCategoryName = model[0].ChildCategories[0].ChildSubCategories[0].SubCategoryName;

            Assert.IsNotNull(okObjectResult);
            Assert.AreEqual(200, okObjectResult.StatusCode);
            Assert.AreEqual(subCategoryName, "VAMC-SubCat-1-1");

        }

    }

}
