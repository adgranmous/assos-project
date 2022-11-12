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
  BlackBox,
} from "./MailerElements";
// import emailjs from "emailjs-com";

const mailMock = () => {
  return new Promise((resolve) => resolve({ text: "ff" }));
};

const Mailer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_fyixszh",
    //     "template_kh02wtj",
    //     e.target,
    //     "3HiqPuvvUCe2YoonF"
    //   )
    mailMock().then(
      (result) => {
        console.log(result.text);
        window.location = "/chantiers";
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <MailerContainer>
        <BlackBox />
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
              <Img src={require("../../images/svg-mail.svg").default} />
            </Column2>
          </MailerRow>
        </MailerWrapper>
      </MailerContainer>
    </>
  );
};

export default Mailer;
