// using Microsoft.Azure.Services.AppAuthentication;
// using Microsoft.Extensions.Configuration;
// using Microsoft.Graph;
// using Microsoft.Identity.Client;
// using System;
// using System.Net.Http;
// using System.Net.Http.Headers;
// using System.Threading.Tasks;

// namespace server.Services {
//     public class GraphApi {
//         private HttpClient _httpClient;
//         private IConfidentialClientApplication _graphClient;
//         private IConfiguration _config;

//         public GraphApi(HttpClient httpClient, IConfiguration config) {
//             _httpClient = httpClient;
//             _config = config;

//             var _applicationOptions = new ConfidentialClientApplicationOptions();
//             _config.Bind("AzureAD", _applicationOptions);

//             _graphClient = ConfidentialClientApplicationBuilder.CreateWithApplicationOptions(_applicationOptions)
//                 .Build();
//         }

//         public async Task<AuthenticationResult> AquireToken() {
//             string[] scopes = new string[] { "https://graph.microsoft.com/.default" };

//             return await _graphClient.AcquireTokenForClient(scopes)
//                 .ExecuteAsync();
//         }

//         public async Task call() {
//             var token = await this.AquireToken();
//             _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", token.AccessToken);

//             var result = await _httpClient.GetAsync("https://graph.microsoft.com/v1.0/users");
//             string content = await result.Content.ReadAsStringAsync();

//             // Note that if you got reponse.Code == 403 and reponse.content.code == "Authorization_RequestDenied"
//             // this is because the tenant admin as not granted consent for the application to call the Web API
//             Console.WriteLine($"Content: {content}");
//         }
//     }
// }