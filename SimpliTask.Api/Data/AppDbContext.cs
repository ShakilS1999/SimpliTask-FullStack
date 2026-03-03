using Microsoft.EntityFrameworkCore;
using SimpliTask.Api.Models;

namespace SimpliTask.Api.Data
{
    public class AppDbContext : DbContext 
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<TaskItem> Tasks { get; set; }
    }
}
