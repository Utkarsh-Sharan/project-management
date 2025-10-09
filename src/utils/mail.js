import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our app! We are excited to have you onboard.",
      action: {
        instructions:
          "To verify your email, please click on the following button.",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Simply reply to this email, we'll be happy to help you.",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account.",
      action: {
        instructions:
          "To reset your password, click on the following button or link.",
        button: {
          color: "#c23131",
          text: "Reset Password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Simply reply to this email, we'll be happy to help you.",
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
