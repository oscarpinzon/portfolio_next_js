import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a developer, I&apos;m passionate about working on cool projects
            that make a difference in people&apos;s lives. Whether it&apos;s
            building a new feature for an existing product or creating a brand
            new application from scratch, I&apos;m always up for a challenge. I
            love the feeling of creating something new and exciting and seeing
            the impact it has on users.
          </p>
          <p className="py-2 text-gray-600">
            In my free time, I enjoy exploring new technologies and
            experimenting with new coding languages. I&apos;m always looking for
            opportunities to collaborate with others in the tech community and
            to work on exciting projects that push the boundaries of what&apos;s
            possible.
          </p>
          <p className="py-2 text-gray-600">
            If you&apos;re looking for a developer who is passionate, creative,
            and dedicated to solving problems with code, then I&apos;d love to
            work with you. Let&apos;s create something amazing together!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/about.jpg"
            alt="image of a computer"
            width={1964}
            height={1964}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
