import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page=()=>{
  return(
    <>
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Get Interview-Ready with AI-Powered Practice and Feedback</h2>
        <p className="text-lg text-gray-600">
          Practice on real interview questions, get AI-generated feedback, and improve your performance with personalized insights.
        </p>
        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">
            Start Practicing Now
          </Link>
        </Button>

      </div>
      <Image src="/public/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden"/>
    </section>
    <section className="flex flex-col  gap-6 mt-8">
      <h2> Your Interviews</h2>
      <div className="interviews-section">
          {dummyInterviews.map((interview) => (
                  <InterviewCard key={interview.id} {...interview}/>
           ))}
      </div>
</section>
    <section className="flex flex-col  gap-6 mt-8">
      <h2>Take an Interview</h2>
      <div className="interviews-section">
           {dummyInterviews.map((interview) => (
                  <InterviewCard key={interview.id} {...interview}/>
           ))}
           {/* <p>You haven't taken any interviews yet.</p> */}
      </div>
    </section>

    </>
  )
}

export default Page
