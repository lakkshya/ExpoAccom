const About = () => {
  return (
    <div>
      <main>
        <section className="flex !my-10 !px-10">
          <div className="w-2/5">
            <h1 className="text-[5rem]">About Us</h1>
          </div>
          <div className="w-3/5">
            <p className="text-[0.925rem]">
              At ExpoAccom, we bridge the gap between business travel and
              cutting-edge technology to provide seamless accommodation and
              travel solutions for professionals attending exhibitions
              worldwide. Our mission is to empower businesses with a smart,
              efficient, and hassle-free way to plan, book, and manage their
              expo trips—all within a user-friendly web environment. By
              leveraging advanced automation and a customer-first approach, we
              ensure that every booking is personalized, cost-effective, and
              stress-free. Whether you're a small business or a multinational
              corporation, our platform offers the flexibility and efficiency
              you need to make the most of your trade fair experience.
            </p>
          </div>
        </section>

        <section className="!my-10">
          <div>
            <h2 className="text-[3rem]">
              ESS * PROCESS * PROCESS * PROCESS * PROCESS * P
            </h2>
            <h2 className="text-[3rem]">
              ESS * PROCESS * PROCESS * PROCESS * PROCESS * P
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5 !m-10">
            <div className="flex flex-col">
              <h3 className="text-[3rem]">01</h3>
              <h3 className="text-[3rem]">Explore</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                hic nulla natus optio velit eligendi impedit illum modi. Odit ea
                sunt tenetur quo dolorum molestiae pariatur earum perferendis,
                architecto doloremque.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[3rem]">01</h3>
              <h3 className="text-[3rem]">Explore</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                hic nulla natus optio velit eligendi impedit illum modi. Odit ea
                sunt tenetur quo dolorum molestiae pariatur earum perferendis,
                architecto doloremque.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[3rem]">01</h3>
              <h3 className="text-[3rem]">Explore</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                hic nulla natus optio velit eligendi impedit illum modi. Odit ea
                sunt tenetur quo dolorum molestiae pariatur earum perferendis,
                architecto doloremque.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center">
          <div className="w-full flex justify-center">
            <h2 className="text-[3rem]">Why Choose Us?</h2>
          </div>
          <div className="flex justify-center gap-10">
            <div>
              <h3>Tailored Accommodation & Travel</h3>
            </div>
            <div>
              <h3>Seamless Booking & Management</h3>
            </div>
            <div>
              <h3>Dedicated Travel Consultants</h3>
            </div>
            <div>
              <h3>Exclusive Trade Fair Insights</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
