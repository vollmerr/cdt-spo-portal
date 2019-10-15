// using Microsoft.EntityFrameworkCore;
// using server.Entities;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;

// namespace server.Services {
//     public class Repository {
//         private Context _context;
//         public Repository(Context context) {
//             _context = context;
//         }

//         public async Task<IEnumerable<User>> GetUsers() {
//             var users = await _context.Users.ToListAsync();
//             return users;
//         }

//         public async Task<IEnumerable<User>> GetUser(string email, string password) {
//             var users = await _context.Users
//                 .Where(x => x.email == email && x.password == password)
//                 .FirstOrDefaultAsync();
//             return users;
//         }
//     }
// }