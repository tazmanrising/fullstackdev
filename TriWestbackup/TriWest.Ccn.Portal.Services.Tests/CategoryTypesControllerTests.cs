using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;
using TriWest.Ccn.Portal.Services.Demo;

using TriWest.Ccn.Portal.Common.Models;
using TriWest.Ccn.Portal.Services.Controllers;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TriWest.Ccn.Portal.Services.Tests
{
    [TestClass]
    public class CategoryTypesControllerTests
    {
        static bool dataInit = false;

        public CategoryTypesControllerTests()
        {
            InitServices();
        }

        private ILogger<CategoryTypesController> _logger;


        private CcnDbContext _dbContext;

        public void InitContext()
        {
            var builder = new DbContextOptionsBuilder<CcnDbContext>()
                .UseInMemoryDatabase();
            var baseDate = DateTime.Now;
            this._dbContext = new CcnDbContext(builder.Options);

        }

        public void InitData()
        {
            if (dataInit) return;

            var VamcCustomer = this.GetCustomer();
            var CategoryForVamcCustomer = this.GetCategories();
            var SubCategoryForVamcCustomer = this.GetSubCategories();

            this._dbContext.CustomerTypes.Add(VamcCustomer);
            this._dbContext.Categories.AddRange(CategoryForVamcCustomer);
            this._dbContext.SubCategories.AddRange(SubCategoryForVamcCustomer);
            this._dbContext.SaveChanges();
            dataInit = true;
        }

        public void InitServices()
        {
            var serviceProvider = new ServiceCollection()
                .AddLogging()
                .BuildServiceProvider();

            var factory = serviceProvider.GetService<ILoggerFactory>();
            factory.AddDebug();

            _logger = factory.CreateLogger<CategoryTypesController>();
        }

        [TestInitialize]
        public void BeforeTestRun()
        {
            this.InitContext();
            this.InitData();
        }

        [TestCleanup]
        public void AfterTestRun()
        {
            this._dbContext.Dispose();
        }

        [TestMethod]
        public void Returns_All_CategoryTypes_As_CategoryList()
        {

            var categoryTypeController = new CategoryTypesController(this._dbContext, this._logger);
            IActionResult actionResult = categoryTypeController.Get();

            var okObjectResult = actionResult as OkObjectResult;
            var data = okObjectResult.Value as List<Category>;

            // Assert
            Assert.IsInstanceOfType(actionResult, typeof(OkObjectResult));
            Assert.IsInstanceOfType(data, typeof(List<Category>));
            Assert.IsNotNull(actionResult);
            Assert.IsNotNull(data);

            Assert.IsTrue(data.Count == 3);
            Assert.IsTrue(data[0].CategoryName == this.GetCategories()[0].CategoryName);
            Assert.IsTrue(data[1].CategoryName == this.GetCategories()[1].CategoryName);
            Assert.IsTrue(data[2].CategoryName == this.GetCategories()[2].CategoryName);
        }

        [TestMethod]
        public void Returns_Specific_Category_For_Proper_CategoryTypeId()
        {
            var categoryTypeController = new CategoryTypesController(this._dbContext, this._logger);
            IActionResult actionResult = categoryTypeController.Get(1);

            var okObjectResult = actionResult as OkObjectResult;
            var data = okObjectResult.Value as Category;

            // Assert
            Assert.IsInstanceOfType(actionResult, typeof(OkObjectResult));
            Assert.IsInstanceOfType(data, typeof(Category));
            Assert.IsNotNull(actionResult);
            Assert.IsNotNull(data);

            Assert.IsTrue(data.CategoryName == "VAMC-Cat-1");
        }

        [TestMethod]
        public void Does_Not_Returns_Category_For_Wrong_CategoryTypeId()
        {
            CategoryTypesController categoryTypeController = NewMethod();
            IActionResult actionResult = categoryTypeController.Get(100);

            var okObjectResult = actionResult as NotFoundObjectResult;
            var data = okObjectResult.Value as Category;

            // Assert
            Assert.IsInstanceOfType(actionResult, typeof(NotFoundObjectResult));
            Assert.IsNotInstanceOfType(data, typeof(Category));
            Assert.IsNotNull(actionResult);
            Assert.IsNull(data);

        }

        //[TestMethod]
        //public void Does_Not_Returns_Category_For_Wrong_CategoryTypeId()
        //{
        //    CategoryTypesController categoryTypeController = NewMethod();
        //    IActionResult actionResult = categoryTypeController.Get(100);

        //    var okObjectResult = actionResult as NotFoundObjectResult;
        //    var data = okObjectResult.Value as Category;


        //    // Assert
        //    Assert.IsInstanceOfType(actionResult, typeof(NotFoundObjectResult));
        //    Assert.IsNotInstanceOfType(data, typeof(Category));
        //    Assert.IsNotNull(actionResult);
        //    Assert.IsNull(data);

        //   Assert.IsTrue(data.CategoryName == "VAMC-Cat-1");
        //}

        private CategoryTypesController NewMethod()
        {
            return new CategoryTypesController(this._dbContext, this._logger);
        }

        private CustomerType GetCustomer()
        {
            return new CustomerType
            {
                CustomerTypeId = 1,
                CustomerTypeName = "Vamc"
            };
        }
        private List<Category> GetCategories()
        {
            return new List<Category> {
                    new Category{ CategoryId = 1, CustomerTypeId = 1, CategoryName = "VAMC-Cat-1" },
                    new Category{ CategoryId = 2, CustomerTypeId = 1, CategoryName = "VAMC-Cat-2" },
                    new Category{ CategoryId = 3, CustomerTypeId = 1, CategoryName = "VAMC-Cat-3" }
                };
        }

        private List<SubCategory> GetSubCategories()
        {
            return new List<SubCategory> {
                    new SubCategory{ SubCategoryId = 1, CategoryId = 1, SubCategoryName = "VAMC-SubCat-1-1" },
                    new SubCategory{ SubCategoryId = 2, CategoryId = 1, SubCategoryName = "VAMC-SubCat-1-2" },
                    new SubCategory{ SubCategoryId = 3, CategoryId = 2, SubCategoryName = "VAMC-SubCat-2-1" },
                    new SubCategory{ SubCategoryId = 4, CategoryId = 2, SubCategoryName = "VAMC-SubCat-2-2" },
                    new SubCategory{ SubCategoryId = 5, CategoryId = 3, SubCategoryName = "VAMC-SubCat-3-1" },
                    new SubCategory{ SubCategoryId = 6, CategoryId = 3, SubCategoryName = "VAMC-SubCat-3-2" }
                };
        }
    }
}