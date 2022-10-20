// import React, {createContext, useContext, useState} from "react";
// import Cookies from "js-cookie";
//
// const authContext = createContext();
// function useAuth() {
//     return useContext(authContext);
// }
//
// const fakeAuth = {
//     isAuthenticated: false,
//     signin(cb) {
//         fakeAuth.isAuthenticated = true;
//         setTimeout(cb, 100); // fake async
//     },
//     signout(cb) {
//         fakeAuth.isAuthenticated = false;
//         setTimeout(cb, 100);
//     }
// };
//
// /** For more details on
//  * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
//  * refer to: https://usehooks.com/useAuth/
//  */
//
// function ProvideAuth({ children }) {
//     const auth = useProvideAuth();
//     return (
//         <authContext.Provider value={auth}>
//             {children}
//         </authContext.Provider>
//     );
// }
//
//
//
// function useProvideAuth() {
//     const [user, setUser] = useState(null);
//
//     const signin = cb => {
//         return fakeAuth.signin(() => {
//             setUser("user");
//             cb();
//         });
//     };
//
//     const signout = cb => {
//         return fakeAuth.signout(() => {
//             setUser(null);
//             cb();
//         });
//     };
//
//     return {
//         user,
//         signin,
//         signout
//     };
// }
//
//
//
//
// export {authContext, useAuth, ProvideAuth, useProvideAuth}
