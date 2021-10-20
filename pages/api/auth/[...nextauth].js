import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Facebook({
      clientId: "589400962386012",
      clientSecret: "12941cb87217f95d73607bf93f65d838",
    }),
    // Provider.Twitter({
    //     clientId:"",
    //     clientSecrete: ""
    // }),
    // Provider.Email({
    //     server:{
    //         host: "",
    //         port: "",
    //         auth: {
    //             user: "",
    //             pass: ""
    //         }
    //     },
    //     form: ""
    // })
  ],
};

export default (req, res) => NextAuth(req, res, options);
