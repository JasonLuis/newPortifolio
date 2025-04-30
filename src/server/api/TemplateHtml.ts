export function TemplateHtmlRecruiter(name: string) {
    return `
        <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.5;
          }
          .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
          }
          .email-header {
            background-color: #0073e6;
            padding: 20px;
            text-align: center;
            color: #ffffff;
          }
          .email-body {
            padding: 20px;
            text-align: center;
          }
          .email-footer {
            text-align: center;
            padding: 10px;
            background-color: #f4f4f4;
            color: #999;
            font-size: 12px;
          }
          p {
            margin: 0px;
            text-align: justify;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>Hello, ${name.replace(/\s+$/g, "")}!</h1>
          </div>
          <div class="email-body">
            <p>Thank you for reaching out! 👋</p>
            <p>I have received your message and will get back to you shortly.</p>
            <p>Best regards,</p>
            <p>Jason Costa 👨‍💻</p>
          </div>
          <div class="email-footer">
            <p>This is an automatic confirmation email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function TemplateHtmlForMe(name: string, email: string, message: string) {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
              line-height: 1.5;
            }
            .email-container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
            }
            .email-header {
              background-color: #0073e6;
              padding: 20px;
              text-align: center;
              color: #ffffff;
            }
            .email-body {
              padding: 20px;
            }
            .email-footer {
              text-align: center;
              padding: 10px;
              background-color: #f4f4f4;
              color: #999;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h1>From ${name.replace(/\s+$/g, "")}!</h1>
            </div>
            <div class="email-body">
              <p>${message}</p>
            </div>
            <div class="email-footer">
              <p>Get in touch with - ${email}</p>
            </div>
          </div>
        </body>
      </html>
    `;
}
