using System;
using System.Net;
using System.Threading.Tasks;


using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace TriWest.Ccn.Portal.Services.Middleware
{
    public sealed class CustomExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public CustomExceptionMiddleware(RequestDelegate next,
                                          ILoggerFactory loggerFactory)
        {
            _next = next;
            _logger = loggerFactory.CreateLogger<CustomExceptionMiddleware>();
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                try
                {
                    var code = HttpStatusCode.InternalServerError;  // 500 default unexpected

                    //all exceptions should be handled by the below layer
                    //TODO: Modify as needed 
                    switch (ex.GetType().ToString())
                    {
                        default:
                            code = HttpStatusCode.InternalServerError;  // 500 default unexpected
                            break;
                    }

                    // Other potential problem codes:
                    //  HttpStatusCode.Unauthorized;

                    var result = JsonConvert.SerializeObject(new { error = ex.Message });
                    context.Response.ContentType = "application/json";
                    context.Response.StatusCode = (int)code;

                    _logger.LogError($"Code: {code}: Exception message: {result}\n{ex}");
                    await context.Response.WriteAsync(result);

                    //if we do not want to rethrow the original
                    //exception the call return
                    return;
                }
                catch (Exception exInner)
                {
                    _logger.LogError(0, exInner, "An exception was thrown attempting " +
                        "to execute the CustomExceptionMiddleware Error Handler.");
                }

                //otherwise rethrow original exception
                throw;
            }
        }
    }
}
