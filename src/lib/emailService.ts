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

    const response = await fetch("https://formsubmit.co/sam29622@gmail.com", {
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
