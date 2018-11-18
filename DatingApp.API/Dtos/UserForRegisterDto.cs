using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set;}
        [Required]
        [StringLength(50, MinimumLength=3, ErrorMessage = "Debe definir al menos 3 de longitud")]
        public string Password { get; set;}
    }
}