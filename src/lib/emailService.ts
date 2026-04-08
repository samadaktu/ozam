// Send contact form email using FormSubmit.co
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
}) => {
  try {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company || "Not provided");
    formDataToSend.append("topic", formData.topic);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("_captcha", "false");

    const response = await fetch("https://formsubmit.co/sam296277@gmail.com", {
      method: "POST",
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return { success: true };
  } catch (error) {
    console.error("Email Service Error:", error);
    throw error;
  }
};
export const sendDemoRequest = async (formData: {
  name: string;
  email: string;
  company: string;
}) => {
  try {
    const formDataToSend = new FormData();
    formDataToSend.append("Form Type", "Demo Request");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company || "Not provided");
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_subject", `New Demo Request from ${formData.name}`);

    const response = await fetch("https://formsubmit.co/sam296277@gmail.com", {
      method: "POST",
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error("Failed to send demo request");
    }

    return { success: true };
  } catch (error) {
    console.error("Demo Service Error:", error);
    throw error;
  }
};
