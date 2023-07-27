export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-zinc-800 mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mt-5 flex-col sm:items-center">
            <h1 className="text-5xl mb-10 text-center text-[#B8CE8E] md:text-2xl lg:text-5xl">
              Kamalika Ghora
            </h1>
            <h2 className="text-2xl text-center text-[#738159] md:text-xl">
              Full stack developer
            </h2>
          </div>
          <div>
            <h2 className="text-2xl text-center mt-20">
              Ai Models and modern software for development
            </h2>
          </div>
          <div>
            <h2 className="text-2xl text-center mt-24 mb-10">ORGANIZATIONS</h2>
            <div className="flex-container flex justify-center">
              <div
                className="flex-item box-border h-72 w-72 rounded-md bg-[#DCE7C8] justify-center bg-no-repeat bg-top flex flex-row hover:bg-[#d9f3a7]"
                style={{
                  backgroundImage: "url('/assets/image1.svg')",
                  backgroundPosition: "center 10px",
                }}
              >
                <h2 className="text-xl text-center text-[#2A2C29] p-48">
                  Front end developer
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-2xl text-center mt-24 mb-10">Projects</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div
              className="box-border h-96 w-72 rounded-lg bg-[#DCE7C8] justify-center bg-no-repeat bg-top flex flex-row hover:bg-[#d9f3a7] m-4"
              style={{
                backgroundImage: "url('/assets/sos1.svg')",
                backgroundPosition: "center 30px",
              }}
            >
              <h2 className="text-2xl text-center text-[#2A2C29] pt-72">
                Social Media App
              </h2>
            </div>
            <div
              className="box-border h-96 w-72 rounded-lg bg-[#DCE7C8] justify-center bg-no-repeat bg-top flex flex-row hover:bg-[#d9f3a7] m-4"
              style={{
                backgroundImage: "url('/assets/iti.svg')",
                backgroundPosition: "center 30px",
              }}
            >
              <h2 className="text-2xl text-center text-[#2A2C29] pt-72">
                Iteinerary Generator
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center mt-16 mb-10 sm:mt-8">Tools</h2>
          <div className="flex flex-wrap justify-center md:justify-center">
            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/react.svg')",
              }}
            ></div>

            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/next.svg')",
              }}
            ></div>

            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/kotlin.svg')",
              }}
            ></div>

            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/tail.svg')",
              }}
            ></div>

            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/github.svg')",
              }}
            ></div>

            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/js.svg')",
              }}
            ></div>

            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/ts.svg')",
              }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center mt-8 mb-10 sm:mt-8">
            Contributions
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/jup.svg')",
              }}
            ></div>

            <div
              className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
              style={{
                backgroundImage: "url('/assets/cal.svg')",
              }}
            ></div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-center mt-8 mb-10">Contact</h2>
          <div className="flex flex-wrap justify-center md:justify-center">
            <a
              href="https://www.linkedin.com/in/kamalika-ghora-3b181a22b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
                style={{
                  backgroundImage: "url('/assets/linkedin.svg')",
                }}
              ></div>
            </a>
            <a
              href="https://github.com/kamalika0363"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="box-border h-36 w-72 rounded-md justify-center bg-no-repeat bg-top m-4"
                style={{
                  backgroundImage: "url('/assets/github.svg')",
                }}
              ></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
