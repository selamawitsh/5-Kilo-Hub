import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import mailjet from '../config/mailjet.js'; 


export const registerUser = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        return res.status(400).json({ message: 'Username already taken' });
      }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = crypto.randomBytes(32).toString('hex');
    const tokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      emailVerificationToken: verificationToken,
      emailVerificationExpires: tokenExpires,
    });

    await newUser.save();

    // Build verification URL
    const verificationUrl = `http://localhost:5000/api/users/verify-email?token=${verificationToken}&email=${email}`;

    // Send email here using Mailjet
    await mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER,
            Name: "5 Kilo Hub",
          },
          To: [
            {
              Email: email,
              Name: username,
            },
          ],
          Subject: "Verify your 5 Kilo Hub account",
          HTMLPart: `
            <h3>Welcome to 5 Kilo Hub, ${username}!</h3>
            <p>Click the link below to verify your email:</p>
            <a href="${verificationUrl}">Verify Email</a>
            <p>This link expires in 24 hours.</p>
          `,
        },
      ],
    });

    // For now, just log it:
    console.log("Verification email would be sent to:", email);
    console.log("Verification link:", verificationUrl);

    res.status(201).json({
      message: 'User registered successfully. Please check your email to verify your account.',
    });

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token (you can set a secret in env)
    const token = jwt.sign(
      { userId: user._id },
      'your_jwt_secret', // ideally use process.env.JWT_SECRET
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { token, email } = req.query;

  try {
    const user = await User.findOne({
      email,
      emailVerificationToken: token,
      emailVerificationExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send('Invalid or expired token.');
    }

    user.isVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    //  Redirect to frontend's home page
    res.redirect('http://localhost:5173/home'); 
  } catch (error) {
    console.error("Email verification error:", error);
    res.status(500).send('Server error during email verification.');
  }
};
