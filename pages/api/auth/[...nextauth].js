import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // the button text displayed on the sign in form
      // so this would be: sign in with Credentials
      name: "Credentials",

      // the input fields on the default sign in form
      // you can use your custom login page instead
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "Enter Your email...",
        },

        password: {
          label: "password",
          type: "password",
          placeholder: "Enter Your password...",
        },
      },

      // The authorize function is where we validate the user input
      // against the database records
      async authorize(credentials, req) {
        // Here you add authentication logic:
        // look for the user, compare the passwords...
        const res = await fetch("https://new.tourzable.com/api/login", {
          method: "post",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: req.body.email,
            password: req.body.password,
          }),
        });
        // and then you may or may not get the user
        const user = await res.json();

        // if credentials are valid
        if (user) {
          const data = user.data;
          const result = {
            ...data,
            success: user.success,
            message: user.message,
          };
          return result;
        } else {
          // if not
          console.log("check your credentials");
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGlE_CLIENT_ID,
      clientSecret: process.env.GOOGlE_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  // enable JWT
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log(user);
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.phone = user.phone;
        token.logo = user.logo;
        token.accessToken = user.token;
        token.userId = user.id;
        token.errorResData = user.success;
        token.message = user.message;
      }

      return token;
    },
    session: ({ session, token, user }) => {
      if (token) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.phone = token.phone;
        session.user.logo = token.logo;
        session.user.accessToken = token.accessToken;
        session.user.userId = token.userId;
        session.user.errorResData = token.errorResData;
        session.user.message = token.message;
      }
      return session;
    },
  },
});