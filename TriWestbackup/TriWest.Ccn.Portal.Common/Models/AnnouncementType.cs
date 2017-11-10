using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace TriWest.Ccn.Portal.Common.Models
{
    public enum AnnouncementType
    {
        [EnumMember(Value = "Corporate")]
        Corporate = 1,
        [EnumMember(Value = "Hub")]
        Hub = 2
    }
}
