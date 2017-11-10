using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace TriWest.Ccn.Portal.Services.Helpers
{
    public class UserInfo
    {

        private readonly ClaimsIdentity _user;

        public UserInfo(ClaimsIdentity user)
        {
            _user = user;
        }


        public string Id
        {
            get
            {
                return _user.Claims.Where(c => c.Type == "sub").SingleOrDefault().Value;
            }
        }

        public string Hub
        {
            get
            {
                return _user.Claims.Where(c => c.Type == "hub").SingleOrDefault().Value;
            }
        }


    }
}
