import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
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
        const res = await fetch(
          "https://andrewromany.pythonanywhere.com/accounts/login/",
          {
            method: "post",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              email: req.body.email,
              password: req.body.password,
            }),
          }
        );
        // and then you may or may not get the user
        const user = await res.json();

        // if credentials are valid
        if (user) {
          const data = user.data;
          console.log("====================================");
          console.log(data);
          console.log("====================================");
          const result = {
            ...data,
            success: user.success,
            message: user.message,
          };
          console.log("ok");
          return result;
        } else {
          let message =
            "Something went wrong maybe you passwords  or email address";
          throw new Error(message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGlE_CLIENT_ID,
      clientSecret: process.env.GOOGlE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  // enable JWT
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      console.log(user);
      if (trigger === "update" && session) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        console.log(session);
        token.first_name = session.user.first_name;
        token.last_name = session.user.last_name;
        token.phone = session.user.phone;
        token.email = session.user.email;
      }
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.phone = user.phone;
        token.image = user.logo;
        token.accessToken = user.token;
        token.userId = user.id;
        token.errorResData = user.success;
        token.message = user.message;
        token.is_operator = user.is_operator;
        token.is_TourGuide = user.is_TourGuide;
      }

      return token;
    },
    session: ({ session, token, user }) => {
      console.log(token);
      if (token) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.first_name = token.first_name;
        session.user.last_name = token.last_name;
        session.user.phone = token.phone;
        session.user.image = token.image;
        session.user.accessToken = token.accessToken;
        session.user.userId = token.userId;
        session.user.errorResData = token.errorResData;
        session.user.message = token.message;
        session.user.googleToken = token.jti;
        session.user.picture = token.picture;
        session.user.is_operator = token.is_operator;
        session.user.is_TourGuide = token.is_TourGuide;
      }
      return session;
    },
  },
});
