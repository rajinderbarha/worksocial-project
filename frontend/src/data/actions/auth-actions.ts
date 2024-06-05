// "use server"
// import { z } from "zod"         // for validation 


// const schemaRegister = z.object({                   // defining scema to structure validation 
//     username: z.string().min(3).max(20, {
//       message: "Username must be between 3 and 20 characters",
//     }),
//     password: z.string().min(6).max(100, {
//       message: "Password must be between 6 and 100 characters",
//     }),
//     email: z.string().email({
//       message: "Please enter a valid email address",
//     }),
//   });

// export async function registerUserAction(prevState:any,formData:FormData) {               // Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.
//     console.log("Hello form registr user action ")
    
//     const validatedFields = schemaRegister.safeParse({          // using schema 
//         username: formData.get("username"),
//         password: formData.get("password"),
//         email: formData.get("email"),
//       });

//       if (!validatedFields.success) {           // if not successfull
//         return {
//           ...prevState,
//           zodErrors: validatedFields.error.flatten().fieldErrors,
//           strapiErrors: null,
//           message: "Missing Fields. Failed to Register.",
//         };
//       }


//     // const fields = {
//     //     username: formData.get("username"),
//     //     password: formData.get("password"),
//     //     email: formData.get("email"),
//     // }

//     // console.log("***********")
//     // console.log(fields)

//     return{
//         ...prevState,
//         data:"ok"
//     }
// }

