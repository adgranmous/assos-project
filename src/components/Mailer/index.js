import {
  MailerContainer,
  MailerWrapper,
  MailerRow,
  MailerH2,
  MailerForm,
  MailerButton,
  MailerInput,
  MailerTextArea,
  Column1,
  Column2,
  Img,
} from "./MailerElements";
import emailjs from "emailjs-com";
import Footer from "../Footer/index";
import Navbar from "../Navbar/index";

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
      <Navbar />
      <MailerContainer>
        <MailerWrapper>
          <MailerRow>
            <Column1>
              <MailerH2>ECRIVEZ NOUS</MailerH2>
              <MailerForm onSubmit={sendEmail}>
                <MailerInput type="text" placeholder="Nom" name="name" />
                <MailerInput
                  type="email"
                  placeholder="Adresse email"
                  name="userEmail"
                />
                <MailerTextArea
                  name="message"
                  placeholder="Message..."
                  rows="4"
                />
                <MailerButton type="submit" value="Envoyer" />
              </MailerForm>
            </Column1>
            <Column2>
              <Img src={require("../../images/svg-6.svg").default} />
            </Column2>
          </MailerRow>
        </MailerWrapper>
      </MailerContainer>
      <Footer />
    </>
  );
};

export default Mailer;
