import {
  MailerContainer,
  MailerWrapper,
  MailerH1,
  MailerForm,
  MailerLabel,
  MailerInput,
  MailerTextArea,
} from "./MailerElements";
import emailjs from "emailjs-com";

const Mailer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fyixszh",
        "template_kh02wtj",
        e.target,
        "3HiqPuvvUCe2YoonF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <MailerContainer>
        <MailerWrapper>
          <MailerH1>Contact form</MailerH1>
          <MailerForm onSubmit={sendEmail}>
            <MailerLabel>name</MailerLabel>
            <MailerInput type="text" name="name" />
            <MailerLabel>Email</MailerLabel>
            <MailerInput type="email" name="userEmail" />
            <MailerLabel>Message</MailerLabel>
            <MailerTextArea name="message" rows="4" />
            <MailerInput type="submit" value="Envoyer" />
          </MailerForm>
        </MailerWrapper>
      </MailerContainer>
    </>
  );
};

export default Mailer;
