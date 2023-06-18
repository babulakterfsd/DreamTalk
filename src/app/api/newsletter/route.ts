/* eslint-disable no-unused-vars */
import { RequestBody } from '@/types/global.types';
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../server/lib/connectDB';
import Newsletter from '../../../../server/model/Newsletter.model';

export async function GET(req: NextRequest, res: NextResponse) {
  await connectDB();
  const allEmails = await Newsletter.find({}).select('email -_id');
  return NextResponse.json({
    status: 'success',
    statusCode: 200,
    data: allEmails,
    message: 'All emails fetched successfully',
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  await connectDB();
  const requestBody = (await req.json()) as RequestBody;
  const { email } = requestBody;

  const isEmailExists = await Newsletter.find({ email });

  if (isEmailExists.length > 0) {
    return NextResponse.json({
      status: 'fail',
      statusCode: 400,
      message: 'Email already exists.',
    });
  }

  const savedEmail = await Newsletter.create({ email });

  if (!savedEmail) {
    return NextResponse.json({
      status: 'fail',
      statusCode: 502,
      message: 'Something is wrong, please try again.',
    });
  }

  return NextResponse.json({
    status: 'success',
    statusCode: 200,
    data: savedEmail,
    message:
      'Thanks for subscribing to our newsletter. We will keep you updated with our latest news.',
  });
}
