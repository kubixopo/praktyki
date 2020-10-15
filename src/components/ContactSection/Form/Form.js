import React from 'react';
import {Formik, useField, Form} from 'formik';
import * as Yup from 'yup';
import {StyledForm, StyledWrapper, StyledLabel, StyledInput, StyledError, StyledTextarea, StyledButton} from "./form.style";

const Input = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <StyledWrapper>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledInput {...field} {...props}/>
            {meta.touched && meta.error ? (
                <StyledError>{meta.error}</StyledError>
            ): null}
        </StyledWrapper>
    );
};

const Textarea = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <StyledWrapper>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledTextarea {...field}{...props}/>
            {meta.touched && meta.error ? (
                <StyledError>{meta.error}</StyledError>
            ): null}
        </StyledWrapper>
    );
};

const ContactForm = () => {

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const sendData = (values) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", values })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    }

    return (
        <Formik
            initialValues={{
                name: "",
                phone: "",
                email: "",
                message: "",
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, "Nazwa musi mieć przynajmniej 2 znaki")
                    .max(50, "Nazwa nie może przekraczać 50 znaków"),
                phone: Yup.string()
                    .min(9, "Numer telefonu musi mieć przynajmniej 9 cyfr")
                    .max(12, "Numer telefonu nie może przekraczać 12 znaków włącznie z (+48)"),
                email: Yup.string()
                    .email("Niepoprawny email")
                    .required('Email wymagany'),
                message: Yup.string()
                    .required('Wiadomość wymagana'),
            })}
            onSubmit={(values , {setSubmitting, resetForm}) => {
                    sendData(values);
                    resetForm();
                    setSubmitting(false);
            }}
        >
            {props => (
                <StyledForm>
                <Form method="POST" data-netlify="true" data-netlify-honeypot="bot-field" style={{width: "100%"}}>
                    <Input label="Nazwa" id="name" type="text" name="name" placeholder="Imię lub Nazwa Firmy"/>
                    <Input label="Telefon" id="phone" type="text" name="phone" placeholder="Numer Telefonu"/>
                    <Input label="Email*" id="email" type="email" name="email" placeholder="Twój adres email"/>
                    <Textarea label="Wiadomość*" name="message" placeholder="Wiadomość"/>
                    <div data-netlify-recaptcha="true"></div>
                    <StyledButton type="submit">{props.isSubmitting ? "Wysyłanie..." : "Wyślij"}</StyledButton>
                </Form>
                </StyledForm>
            )}
        </Formik>
    );
}

export default ContactForm;
