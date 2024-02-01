import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
    const { body } = await request.json();
    const { email, subject, message } = body;
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: ['salmanwiharja8@gmail.com', email],
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting me!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            )
        });

        return Response.json(data);
    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ error: 'Failed to send email.' }, { status: 500 });
    }
}