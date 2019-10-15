using System.ComponentModel.DataAnnotations;

namespace server.Dtos {
    public class ForgetPasswordDto {
        [Required]
        public string Email;
    }
}