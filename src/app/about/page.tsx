import Slider from './Slider/Slider';

const About = () => {
  return (
    <main>
      <div className='flex items-center justify-center flex-col absolute dark:text-[var(--yellow)] w-full mt-1 text-white z-10'>
        <h2 className='font-vibes text-[calc(var(--index)*2)] leading-tight md:text-[calc(var(--index)*3)] text-center md:tracking-wider [text-shadow:3px_3px_3px_var(--brown)]'>
          So, what has been implemented in this project?
        </h2>
        <div className='flex items-center justify-center flex-col bg-black rounded-3xl bg-opacity-40'>
          <p className='text-center text-[calc(var(--index)*.8)] [text-shadow:3px_3px_3px_black] px-2 font-[montserrat]'>
            ⚜In the Services section, you can choose the service you are
            interested in.There is the possibility of booking the service. After
            pressing the appropriate button, a side panel with a calendar will
            open, where we specify the date and time of the reservation. If the
            reservation is successful, you will see a pop-up confirmation window
            in the lower right corner. If the service has already been booked,
            the time button for the corresponding date will be blocked. There is
            a button to register on the site in the navigation panel. You can
            choose the method of registration via email or social networks. If
            you do not register, you will not be able to book the service,and
            also enter into your cabinet. After registration, by logging into
            your account, you can view all booked services, as well as cancel
            services or mark them as completed.⚜
          </p>
          <span>⚜</span>
        </div>
      </div>
      <Slider />
    </main>
  );
};

export default About;
