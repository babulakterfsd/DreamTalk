import { model, models, Schema } from 'mongoose';
import validator from 'validator';

const NewsletterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
  },
  {
    timestamps: true,
  }
);

const Newsletter = models.Email || model('Newsletter_Email', NewsletterSchema);
export default Newsletter;
