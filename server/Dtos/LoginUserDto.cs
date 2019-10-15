using System.ComponentModel.DataAnnotations;

namespace server.Dtos {
    public class LoginUserDto {
        [Required]
        public string Email;
        [Required]
        public string Password;
    }
}