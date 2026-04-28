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
    formDataToSend.append("Full Name", formData.name);
    formDataToSend.append("Email Address", formData.email);
    formDataToSend.append("Company", formData.company || "Not provided");
    formDataToSend.append("Interest Topic", formData.topic);
    formDataToSend.append("Message", formData.message);
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table");
    formDataToSend.append("_subject", `New Inquiry: ${formData.topic} from ${formData.name}`);

    const response = await fetch("https://formsubmit.co/info@ozma.in", {
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
    formDataToSend.append("Full Name", formData.name);
    formDataToSend.append("Email Address", formData.email);
    formDataToSend.append("Company", formData.company || "Not provided");
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table");
    formDataToSend.append("_subject", `Urgent: Demo Request from ${formData.name}`);

    const response = await fetch("https://formsubmit.co/info@ozma.in", {
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
