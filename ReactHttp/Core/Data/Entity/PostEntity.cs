using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactHttp.Core.Data.Entity
{
    [Table("Posts")]
    public class PostEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}
