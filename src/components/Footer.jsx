import SectionTitle from "./SectionTitle";
import email from "../assets/email.svg";

export default function Footer() {
  return (
    <div className="box-margin font1 desk-margin">
      <SectionTitle title="Contact me" />

      <div className="contact">
        <p>
          <img src={email} alt="" />
          email: kerp4real@gmail
        </p>
      </div>
    </div>
  );
}
