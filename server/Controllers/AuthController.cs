using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Dtos;
using server.Models;
using System;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

// https://github.com/aspnet/AspNetCore.Docs/tree/master/aspnetcore/security/authentication/identity/sample/src/ASPNETCore-IdentityDemoComplete/IdentityDemo

namespace server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        // private readonly IEmailSender _emailSender;
        // private readonly ILogger _logger;
        // private readonly UrlEncoder _urlEncoder;

        private const string AuthenticatorUriFormat = "otpauth://totp/{0}:{1}?secret={2}&issuer={0}&digits=6";
        private const string RecoveryCodesKey = nameof(RecoveryCodesKey);

        public AuthController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager
            // IEmailSender emailSender,
            // ILogger<ManageController> logger,
            // UrlEncoder urlEncoder
        ) {
            _userManager = userManager;
            _signInManager = signInManager;
            // _emailSender = emailSender;
            // _logger = logger;
            // _urlEncoder = urlEncoder;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto model) {
            // create new user
            var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);

            // TODO: better handle failure (return reason, not throw error. Ex. duplicate email)
            if (!result.Succeeded) {
                throw new Exception($"[AuthController.Register] failed to create account for {model.Email}");
            }

            // successfully created new user
            // _logger.LogInformation($"[AuthController.Register]: new account created for {model.Email}");
            // send confirmation email
            // TODO: ...
            // var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            // var callbackUrl = Url.EmailConfirmationLink(user.Id, code, Request.Scheme);
            // await _emailSender.SendEmailConfirmationAsync(model.Email, callbackUrl);
            // await _signInManager.SignInAsync(user, isPersistent : false);
            // TODO: what status / data return?
            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserDto model) {
            // get user based off email
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);

            if (result.Succeeded) {
                // TODO: create token to return
                return Ok();
            } else if (result.RequiresTwoFactor) {
                // TODO: 2 factor stuff...
            } else if (result.IsLockedOut) {
                // TODO: locked out stuff...
            }

            return BadRequest();
        }

        [HttpPost("forget-password")]
        public async Task<IActionResult> ForgotPassword(ForgetPasswordDto model) {
            var user = await _userManager.FindByEmailAsync(model.Email);
            // user doesnt exists or is not confirmed
            if (user == null || !(await _userManager.IsEmailConfirmedAsync(user))) {
                return BadRequest();
            }

            // For more information on how to enable account confirmation and password reset please
            // visit https://go.microsoft.com/fwlink/?LinkID=532713
            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            // TODO: send email with token
            // var callbackUrl = Url.ResetPasswordCallbackLink(user.Id, code, Request.Scheme);
            // await _emailSender.SendEmailAsync(model.Email, "Reset Password",
            //     $"Please reset your password by clicking here: <a href='{callbackUrl}'>link</a>");

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model) {
            // if (!ModelState.IsValid) {
            //     return View(model);
            // }
            // var user = await _userManager.FindByEmailAsync(model.Email);
            // if (user == null) {
            //     // Don't reveal that the user does not exist
            //     return RedirectToAction(nameof(ResetPasswordConfirmation));
            // }
            // var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);
            // if (result.Succeeded) {
            //     return RedirectToAction(nameof(ResetPasswordConfirmation));
            // }
            // AddErrors(result);
            // return View();
        }
    }
}