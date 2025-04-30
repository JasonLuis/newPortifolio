// server/api/sendEmail.ts
import { TemplateHtmlRecruiter, TemplateHtmlForMe } from './TemplateHtml';

export default defineEventHandler(async (event) => {
  try {
    const {name, email, message} = await readBody(event);

    const SendRecruiter = await sendEmailRecruiter(name, email);
    const sendForMe = await sendEmailForMe(name, email, message);

    return {
      successSendRecruiter: SendRecruiter.accepted,
      successSendForMe: sendForMe.accepted
    };
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    return { success: false, error: error };
  }
});

const sendEmailRecruiter = async (name: string, email: string) => {
  const { transport } = useNodeMailer();
  const info = await transport.sendMail({
    from: 'Jason Developer </>',
    to: email,
    subject: `Contact`,
    html: TemplateHtmlRecruiter(name),
  });

  return info;
}

const sendEmailForMe = async (name: string, email: string, message: string) => {
  const { transport } = useNodeMailer();
  const info = await transport.sendMail({
    from: 'Jason Developer </>',
    to: process.env.USER,
    subject: `Contact`,
    html: TemplateHtmlForMe(name, email, message),
  });

  return info;
}