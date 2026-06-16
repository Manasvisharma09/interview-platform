import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";

const Page = async () => {
  const user = await getCurrentUser();
  const userId = user?.id;

  const [userInterviews, latestInterviews] = userId
    ? await Promise.all([
        getInterviewsByUserId(userId),
        getLatestInterviews({ userId }),
      ])
    : [[], []];

  const hasPastInterviews = (userInterviews?.length ?? 0) > 0;
  const hasUpcomingInterviews = (latestInterviews?.length ?? 0) > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex max-w-lg flex-col gap-6">
          <h2>Get Interview-Ready with AI-Powered Practice and Feedback</h2>
          <p className="text-lg text-gray-600">
            Practice on real interview questions, get AI-generated feedback, and improve your
            performance with personalized insights.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start Practicing Now</Link>
          </Button>
        </div>
        <Image
          src="/public/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="mt-8 flex flex-col gap-6">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => <InterviewCard {...interview} key={interview.id} />)
          ) : (
            <p>There are no new interviews available</p>
          )}
        </div>
      </section>

      <section className="mt-8 flex flex-col gap-6">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You haven&apos;t taken any interview yet</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
