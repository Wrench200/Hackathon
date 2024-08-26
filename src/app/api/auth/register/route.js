import user from '@/models/user'
export const POST = async (req) => {
    const data = await req.body

    try {

        const hashPassword = bcryptConfig.hash(data.password);
        data.password = hashPassword;
        data.email = data.email.toLowerCase();
        data.username = data.username.toLowerCase();

        const user = new User(data);
        const otp = this.generateRamdom(5);
        user.is_confirm_email = otp;

        await user.save();
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });
        const content = `
            Welcom ${data.username}

            Use thi code to confirm your email address: ${otp}
        `;
        await mailService.send(data.email, 'Verify your email address', content);
        return { error: false, data: user };
    } catch (error) {

        return { error: true, data: error.message };
    }
    if (!create.error) {

        return response.status().json(
            res.success('Register succefully', null, 'CREATED', 201)
        );
    }

    return response.status(422).json(
        res.error(create.data)
    );
}