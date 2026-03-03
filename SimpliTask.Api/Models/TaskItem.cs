using System.ComponentModel.DataAnnotations;

namespace SimpliTask.Api.Models
{
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(200)]
        public string Title { get; set; }
        [MaxLength(500)]
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public bool IsCompleted { get; set; } = false;
    }
}
