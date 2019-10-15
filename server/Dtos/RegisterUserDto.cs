using System.ComponentModel.DataAnnotations;

namespace server.Dtos {
    public class RegisterUserDto {
        [Required]
        public string Email;
        [Required]
        public string Password;
    }
}