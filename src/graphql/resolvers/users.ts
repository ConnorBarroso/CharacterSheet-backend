import { GraphQLError } from "graphql";
import { userModel } from "../../models/user.js";
import { hash } from "bcrypt";

export const userMutation = {
  Mutation: {
    registerUser: async (
      _,
      { registerInput: { username, email, password } }
    ) => {
      const exisingEmail = await userModel.findOne({ email });

      if (exisingEmail) {
        throw (
          (new GraphQLError(`Email: ${email} is already linked to an account`),
          {
            extensions: {
              code: "EMAIL_ALREADY_EXISTS",
            },
          })
        );
      }

      const encryptedPassword = await hash(password);
    },
  },
};
