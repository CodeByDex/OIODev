"use client";
import "tailwindcss/tailwind.css";

export default function AboutUs() {
  return (
    <section className="about--container flex flex-col items-center justify-start gap-3 max-w-6xl px-4 w-full md:w-4/5 lg:w-3/4">
      <h2 className="font-primary font-semibold text-brand-textHeader text-left text-3xl md:text-4xl lg:text-5xl mr-auto">
        Welcome to OI<span className="text-brand-secondary">/</span>O Dev
      </h2>
      <p>
        Your gateway to skilled freelance developers who specialize in creating
        exceptional websites and server applications. We connect you with
        talented professionals who bring your digital vision to life on a
        freelance basis.
      </p>
      <p>
        At OIO Dev, we understand the importance of finding the right freelance
        developer to meet your specific needs. Our platform allows you to browse
        through our pool of freelancers who excel in their respective fields.
        Whether you need a freelance developer for a short-term project or
        ongoing collaboration, we have the perfect match for you.
      </p>
      <p>
        By working with a developer from OIO Dev, you gain the advantage of
        flexibility and cost-effectiveness. You have the freedom to collaborate
        directly with the freelancer, providing input and feedback throughout
        the development process. Our platform streamlines the hiring and
        onboarding process, making it easy for you to connect with the right
        freelance developer and start your project without any hassle.
      </p>
      <p>
        Unlock the full potential of your digital presence with a developer from
        OIO Dev. Let our talented freelancers transform your ideas into
        remarkable web applications that align with your vision
        and goals.
      </p>
    </section>
  );
}
