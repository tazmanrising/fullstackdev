using System;
using System.ComponentModel.DataAnnotations;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using NetEscapades.AspNetCore.SecurityHeaders;
using NLog.Extensions.Logging;
using NLog.Web;
using Newtonsoft.Json;

using TriWest.Ccn.Portal.Services.Demo;
using TriWest.Ccn.Portal.Services.Middleware;

namespace TriWest.Ccn.Portal.Services
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCustomHeaders();            // apply security

            services.AddSingleton<IConfigurationRoot>(Configuration);

            services.AddDbContext<CcnDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });

            // TODO: replace with a real database someday
            services.AddDbContext<CcnPortalDbContext>(options =>
            {
                options.UseInMemoryDatabase();
            });

            services.AddSwaggerGen();

            services.AddCors(options =>
            {
                // this defines a CORS policy called "default"
                options.AddPolicy("default", policy =>
                {
                    policy.WithOrigins("http://localhost:5003")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });


            // Add framework services.
            services.AddMvc()
                    .AddJsonOptions(options => 
                    {
                        options.SerializerSettings.ReferenceLoopHandling =
                            Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                    });
            services.AddMvcCore(o => { o.MaxModelValidationErrors = 500; })
                .AddDataAnnotations()
                .AddAuthorization()
                .AddJsonFormatters()
                .AddDataAnnotations();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            // setup logging
            loggerFactory.AddNLog();
            env.ConfigureNLog("nlog.config");
            app.AddNLogWeb();

            //add custom middle ware for exception handling
            app.UseMiddleware<CustomExceptionMiddleware>();

            // for more info on the security applied see: https://jeremylindsayni.wordpress.com/2016/12/22/creating-a-restful-web-api-template-in-net-core-1-1-part-4-securing-the-service-against-xss-clickjacking-and-drive-by-downloads/
            var policyCollection = new HeaderPolicyCollection()
                .AddFrameOptionsSameOrigin()        // prevent click-jacking
                .AddXssProtectionBlock()            // prevent cross-site scripting
                .AddContentTypeOptionsNoSniff();    // prevent drive-by-downloads

            app.UseCustomHeadersMiddleware(policyCollection);

            // TODO: this should not be here but needed for now...
            //if(env.IsDevelopment())
            //{
                using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    serviceScope.ServiceProvider.GetService<CcnPortalDbContext>().EnsureSeedData();
                }
            //}

            // this uses the policy called "default"
            app.UseCors("default");

            //app.UseIdentityServerAuthentication(new IdentityServerAuthenticationOptions
            //{
            //    Authority = "http://localhost:4000",
            //    RequireHttpsMetadata = false,
            //    ApiName = "portalApi"
            //});

            app.UseMvc();

            app.UseSwagger();
            //app.UseSwaggerUi();
            app.UseSwaggerUi("swagger/ui", "../../v1/swagger.json");

        }
    }
}
