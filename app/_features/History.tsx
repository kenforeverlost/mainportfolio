import ProfileSection from '@components/ProfileSection'

const History = () => {
  return (
    <ProfileSection
      id={'experience'}
      title={'Work History'}
      titleClass={'text-slate-900'}
      textClass={'text-slate-800'}
      backgroundClass={'bg-base-100'}
    >
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          <div className="flex flex-col items-center text-center justify-center">
            <a
              className="w-5/12 mb-8"
              href="https://www.lasvegasrealtor.com/"
              target="_blank"
            >
              <img
                src="https://exiknbsnihiuomwzvubu.supabase.co/storage/v1/object/public/images/lvr_logo.png"
                alt="LVR"
              />
            </a>
            <div className="text-xl font-bold">Web Developer</div>
            <div className="text-lg">Las Vegas REALTORS®</div>
            <div className="italic text-md">September 2020 to Current</div>
          </div>
          <div className="flex flex-col justify-center gap-2 col-span-1 md:col-span-2">
            <div>
              <div className="font-bold ">Highlights</div>
              <ul className="list-disc ml-5">
                <li>
                  Refined and enhanced the LVR member web portal to increase
                  membership engagement and accessibility of association news
                </li>
                <li>
                  Integrated several web APIs including the DocuSign API for
                  membership applications and the SendGrid API for automated
                  email notices
                </li>
                <li>
                  Managed the digitization of the member check-in process for
                  verifying registration and tracking attendance at events to
                  better efficiency
                </li>
                <li>
                  Built administration tools to aid staff in helping members
                  with daily tasks
                </li>
                <li>
                  Migrated components from the legacy member web portal stack to
                  modern solutions such as Next.js and Sanity
                </li>
                <li>
                  Provided support to the development of the member portal
                  mobile app
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold ">Main Tools:</span> PHP, SQL,
              Javascript, HTML, CSS, Next.js, React, Tailwind CSS, Supabase
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          <div className="flex flex-col items-center text-center justify-center">
            <a
              className="w-5/12 mb-8"
              href="https://www.fdm4.com/"
              target="_blank"
            >
              <img
                src="https://exiknbsnihiuomwzvubu.supabase.co/storage/v1/object/public/images/fdm4_logo.png"
                alt="FDM4"
              />
            </a>
            <div className="text-xl font-bold">Programmer Analyst</div>
            <div className="text-lg">FDM4 America, Inc.</div>
            <div className="italic text-md">June 2015 to June 2020</div>
          </div>
          <div className="flex flex-col justify-center gap-2 col-span-1 md:col-span-2">
            <div>
              <div className="font-bold ">Highlights</div>
              <ul className="list-disc ml-5">
                <li>
                  Strengthened the quality of the ERP, WMS, and E-Commerce
                  software solutions through custom modifications and bug fixes
                </li>
                <li>
                  Collaborated directly with clients on-site in assisting with
                  questions and addressing issues to build rapport and
                  confidence with the company
                </li>
                <li>
                  Led a live product upgrade to upkeep the client’s software
                  version
                </li>
                <li>
                  Counseled new hires on knowing company procedures, learning
                  programming tools, and understanding the software
                </li>
                <li>
                  Produced code reviews on the work of other team members and
                  assumed team lead duties when needed
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold ">Main Tools:</span> Progress 4GL,
              JavaScript, HTML, CSS, Bootstrap
            </div>
          </div>
        </div>
      </div>
    </ProfileSection>
  )
}

export default History
