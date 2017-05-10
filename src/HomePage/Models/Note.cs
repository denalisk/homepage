using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HomePage.Models
{
    [Table("Notes")]
    public class Note
    {
        [Key]
        public int Id { get; set; }
        public string Content { get; set; }
    }
}
