// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Security.Claims;
using TriWest.Ccn.Portal.IdentityServer.Models;

namespace IdentityServer
{
    public class Resources
    {

        // scopes define the resources in your system
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResources.Phone(),
                new IdentityResource("role", new List<string> {"role"}),
                new IdentityResource("hub", new List<string> {"hub"})
            };
        }


        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource
                {
                    Name = "portalApi",
                    DisplayName = "CCN Portal API",
                    UserClaims = new List<string> {"role", "hub"},
                    Scopes = new List<Scope>
                    {
                        new Scope("portalApi"),
                        new Scope("portalApi.read"),
                        new Scope("portalApi.write")
                    }
                }
            };
        }


        // clients want to access resources (aka scopes)
        public static IEnumerable<Client> GetClients(PortalClientConfiguration config)
        {
            // client credentials client
            return new List<Client>
            {
                // CCN Portal
                new Client
                {
                    ClientId = "portal",
                    ClientName = "CCN Portal",
                    AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,
                    AllowAccessTokensViaBrowser = true,
                    RequireConsent = false,
                    ClientSecrets = { new Secret("password".Sha256()) },
                    RedirectUris = { config.PortalRedirectUri },
                    PostLogoutRedirectUris = { config.PortalPostLogoutRedirectUri },
                    AllowOfflineAccess = true,
                    AllowedCorsOrigins = { config.PortalAllowedCorsOrigins },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "role",
                        "hub",
                        "portalApi",
                        "portalApi.write",
                        "portalApi.read"
                    }
                },
                
                // resource owner password grant client
                new Client
                {
                    ClientId = "ro.client",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                    AllowedScopes = { "PortalApi", "PermissionApi" },
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    }
                },

                // OpenID Connect implicit flow client (MVC)
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC Client",
                    ClientSecrets = { new Secret("password".Sha256()) },
                    AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,
                    RequireConsent = false,
                    RedirectUris = { "http://localhost:5002/signin-oidc" },
                    PostLogoutRedirectUris = { "http://localhost:5002/signout-callback-oidc" },
                    AllowOfflineAccess = true,
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "role",
                        "hub",
                        "portalApi",
                        "portalApi.write",
                        "portalApi.read"
                    }
                },

                // JavaScript Client
                new Client
                {
                    ClientId = "js",
                    ClientName = "JavaScript Client",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,
                    RequireConsent = false,
                    ClientSecrets = { new Secret("password".Sha256()) },
                    RedirectUris =  { "http://localhost:5003/callback.html" },
                    PostLogoutRedirectUris = { "http://localhost:5003/index.html" },
                    AllowedCorsOrigins = { "http://localhost:5003" },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "role",
                        "hub",
                        "portalApi",
                        "portalApi.write",
                        "portalApi.read"
                    }
                }


            };
        }


        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                // Alice, Phoenix, Admin & CSR
                new TestUser
                {
                    SubjectId = "1",
                    Username = "alice",
                    Password = "password",

                    Claims = new List<Claim>
                    {
                        new Claim(JwtClaimTypes.Name, "Alice Jones"),
                        new Claim(JwtClaimTypes.WebSite, "https://alice.com"),
                        new Claim(JwtClaimTypes.Email, "alice@alice.com"),
                        new Claim(JwtClaimTypes.Role, "admin"),
                        new Claim(JwtClaimTypes.Role, "csr"),
                        new Claim("hub", "phoenix")
                    }
                },

                // Bob, Phoenix, CSR
                new TestUser
                {
                    SubjectId = "2",
                    Username = "bob",
                    Password = "password",

                    Claims = new List<Claim>
                    {
                        new Claim(JwtClaimTypes.Name, "Bob Smith"),
                        new Claim(JwtClaimTypes.WebSite, "https://bob.com"),
                        new Claim(JwtClaimTypes.Email, "bob@bob.com"),
                        new Claim(JwtClaimTypes.Role, "csr"),
                        new Claim("hub", "phoenix")
                    }
                },

                // Carol, Nashville, CSR
                new TestUser
                {
                    SubjectId = "3",
                    Username = "carol",
                    Password = "password",

                    Claims = new List<Claim>
                    {
                        new Claim(JwtClaimTypes.Name, "Carol Prettylonglastname"),
                        new Claim(JwtClaimTypes.WebSite, "https://carol.com"),
                        new Claim(JwtClaimTypes.Email, "carol@carol.com"),
                        new Claim(JwtClaimTypes.Role, "csr"),
                        new Claim("hub", "nashville")
                    }
                },

                // Eve, Phoenix
                new TestUser
                {
                    SubjectId = "5",
                    Username = "eve",
                    Password = "password",

                    Claims = new List<Claim>
                    {
                        new Claim(JwtClaimTypes.Name, "Evil Eve"),
                        new Claim(JwtClaimTypes.WebSite, "https://eve.com"),
                        new Claim(JwtClaimTypes.Email, "eve@evil.com"),
                        //new Claim(JwtClaimTypes.Role, "csr"),
                        new Claim("hub", "phoenix")
                    }
                }

            };
        }
    }
}
