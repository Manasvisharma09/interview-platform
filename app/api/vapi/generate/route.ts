import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { getRandomInterviewCover } from '@/lib/utils';
import { db } from '@/firebase/admin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("📥 Received body from VAPI:", body);

    const { type, role, level, techstack, amount, userid } = body;

    const { text: questions } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `Prepare questions for a job interview.
      The job role is ${role}.
      The job experience level is ${level}.
      The tech stack used in the job is: ${techstack}.
      The focus between behavioural and technical questions should lean towards: ${type}.
      The amount of questions required is: ${amount}.
      Return the questions formatted like this: ["Question 1", "Question 2", "Question 3"]`,
    });

    const interview = {
      type,
      role,
      level,
      techstack: techstack.split(','),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection('interviews').add(interview);
    console.log("✅ Interview saved!");
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("❌ Error in POST /api/vapi/generate:", error);
    let errorMessage = "Unknown error";
    if (error && typeof error === "object" && "message" in error && typeof (error as any).message === "string") {
      errorMessage = (error as any).message;
    }
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
