// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NLog.Extensions.Logging;
using NLog.Web;
using TriWest.Ccn.Portal.IdentityServer.Models;



namespace IdentityServer
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            // TODO: hack to get idsrv working in different environments
            var configuration = new PortalClientConfiguration();
            foreach (var item in Configuration.AsEnumerable())
            {
                if(item.Key == "PortalClientConfig:PortalRedirectUri")
                    configuration.PortalRedirectUri = item.Value;

                if (item.Key == "PortalClientConfig:PortalPostLogoutRedirectUri")
                    configuration.PortalPostLogoutRedirectUri = item.Value;

                if (item.Key == "PortalClientConfig:PortalAllowedCorsOrigins")
                    configuration.PortalAllowedCorsOrigins = item.Value;
            }

            services.AddMvc();

            // configure identity server with in-memory stores, keys, clients and scopes
            services.AddIdentityServer()
                .AddTemporarySigningCredential()
                .AddInMemoryIdentityResources(Resources.GetIdentityResources())
                .AddInMemoryApiResources(Resources.GetApiResources())
                .AddInMemoryClients(Resources.GetClients(configuration))
                .AddTestUsers(Resources.GetUsers());
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(LogLevel.Debug);
            loggerFactory.AddNLog();

            env.ConfigureNLog("nlog.config");
            app.AddNLogWeb();

            app.UseDeveloperExceptionPage();

            app.UseIdentityServer();

            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}