namespace TriWest.Ccn.Portal.IdentityServer.Models
{
    public class PortalClientConfiguration
    {
        public string PortalRedirectUri { get; set; }
        public string PortalPostLogoutRedirectUri { get; set; }
        public string PortalAllowedCorsOrigins { get; set; }
    }
}
